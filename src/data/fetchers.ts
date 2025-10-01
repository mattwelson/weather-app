import { server$ } from "@builder.io/qwik-city";
import {
  ForecastResponseType,
  LocationResponse,
  SearchLocationResponse,
  WeatherCodeType,
} from "./types";
import { NoSerialize } from "@builder.io/qwik";

// Example URL
// http://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=weather_code,temperature_2m&current=temperature_2m,apparent_temperature,relative_humidity_2m,is_day,wind_speed_10m,weather_code,precipitation&timezone=auto

const defaultParams = {
  daily: "weather_code,temperature_2m_max,temperature_2m_min",
  hourly: "weather_code,temperature_2m",
  current:
    "temperature_2m,apparent_temperature,relative_humidity_2m,is_day,wind_speed_10m,weather_code,precipitation",
  timezone: "auto",
};

// Build query string manually without encoding commas
const buildOpenMeteoQuery = (
  params: Partial<typeof defaultParams> & {
    latitude: number;
    longitude: number;
  }
): string => {
  const entries = Object.entries({ ...defaultParams, ...params });
  const queryParts = entries.map(([key, value]) => `${key}=${value}`);
  return queryParts.join("&");
};

export const fetchWeather = server$(async function (
  latitude: number,
  longitude: number
) {
  // TODO: rate limit?
  // build URL
  var searchParams = buildOpenMeteoQuery({ latitude, longitude });

  // fetch
  var response = await fetch(
    `https://api.open-meteo.com/v1/forecast?${searchParams}`
  );

  // TODO: Error handling

  var json = await response.json();
  var data = await ForecastResponseType.parseAsync(json);

  // TODO: Zod Codec?
  return {
    current: {
      time: data.current.time,
      precipitation: data.current.precipitation,
      temperature: data.current.temperature_2m,
      apparentTemperature: data.current.apparent_temperature,
      relativeHumidity: data.current.relative_humidity_2m,
      isDay: data.current.is_day === 1,
      windSpeed: data.current.wind_speed_10m,
      weatherCode: data.current.weather_code as WeatherCodeType,
    },
    hourly: {
      time: data.hourly.time,
      temperature: data.hourly.temperature_2m,
      weatherCode: data.hourly.weather_code as WeatherCodeType[],
    },
    daily: {
      time: data.daily.time,
      temperatureMax: data.daily.temperature_2m_max,
      temperatureMin: data.daily.temperature_2m_min,
      weatherCode: data.daily.weather_code as WeatherCodeType[],
    },
  };
});

/**
 * Resolve location id to location object
 */
export const fetchLocation = server$(async function (id: string) {
  const uri = `https://geocoding-api.open-meteo.com/v1/get?id=${id}`;
  const response = await fetch(uri);
  const json = await response.json();
  const data = await LocationResponse.parseAsync(json);
  return data;
});

/**
 * Search using a partial location term
 */
export const fetchSearchLocation = server$(async function (
  term: string,
  abortController: NoSerialize<AbortController>
) {
  const uri = `https://geocoding-api.open-meteo.com/v1/search?name=${term}`;
  const response = await fetch(uri, { signal: abortController?.signal });
  const json = await response.json();
  const data = await SearchLocationResponse.parseAsync(json);
  return data;
});
