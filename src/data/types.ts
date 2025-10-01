import { z } from "@builder.io/qwik-city";

export const WeatherCode = [
  0, 1, 2, 3, 45, 48, 51, 53, 55, 56, 57, 80, 81, 82, 61, 63, 65, 66, 67, 77,
  85, 86, 71, 73, 75, 95, 96, 99,
] as const;

export type WeatherCodeType = (typeof WeatherCode)[number];

// These zod types are only used to parse the result of the forecast fetch
export const CurrentResponseType = z.object({
  time: z.coerce.date(),
  temperature_2m: z.number(),
  apparent_temperature: z.number(),
  relative_humidity_2m: z.number().min(0).max(100),
  is_day: z.union([z.literal(0), z.literal(1)]),
  wind_speed_10m: z.number().nonnegative(),
  weather_code: z.number(),
  precipitation: z.number().nonnegative(),
});

export const HourlyResponseType = z.object({
  time: z.coerce.date().array(),
  weather_code: z.number().array(),
  temperature_2m: z.number().array(),
});

export const DailyResponseType = z.object({
  time: z.coerce.date().array(),
  weather_code: z.number().array(),
  temperature_2m_max: z.number().array(),
  temperature_2m_min: z.number().array(),
});

export const ForecastResponseType = z.object({
  current: CurrentResponseType,
  hourly: HourlyResponseType,
  daily: DailyResponseType,
});

export const LocationResponse = z.object({
  id: z.coerce.string(),
  name: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  elevation: z.number(),
  feature_code: z.string(),
  country_code: z.string(),
  admin1_id: z.number().optional(),
  admin2_id: z.number().optional(),
  admin3_id: z.number().optional(),
  admin4_id: z.number().optional(),
  timezone: z.string(),
  population: z.number().positive(),
  country_id: z.coerce.string(),
  country: z.string(),
  admin1: z.string().optional(),
  admin2: z.string().optional(),
  admin3: z.string().optional(),
  admin4: z.string().optional(),
});

export type LocationResponseType = z.infer<typeof LocationResponse>;

export const SearchLocationResponse = z.object({
  results: LocationResponse.array(),
});
