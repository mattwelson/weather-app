import Sunny from "~/assets/images/icon-sunny.webp?jsx";
import PartlyCloudy from "~/assets/images/icon-partly-cloudy.webp?jsx";
import Overcast from "~/assets/images/icon-overcast.webp?jsx";
import Fog from "~/assets/images/icon-fog.webp?jsx";
import Drizzle from "~/assets/images/icon-drizzle.webp?jsx";
import Rain from "~/assets/images/icon-rain.webp?jsx";
import Snow from "~/assets/images/icon-snow.webp?jsx";
import Storm from "~/assets/images/icon-storm.webp?jsx";
import { component$ } from "@builder.io/qwik";
import type { WeatherCodeType } from "~/data/types";

interface WeatherData {
  description: string;
  icon: typeof Sunny;
}

export const WeatherCodeMap = new Map<number, WeatherData>([
  [0, { description: "Clear", icon: Sunny }],
  [1, { description: "Mostly Clear", icon: Sunny }],
  [2, { description: "Partly Cloudy", icon: PartlyCloudy }],
  [3, { description: "Overcast", icon: Overcast }],
  [45, { description: "Fog", icon: Fog }],
  [48, { description: "Icy Fog", icon: Fog }],
  [51, { description: "Light Drizzle", icon: Drizzle }],
  [53, { description: "Drizzle", icon: Drizzle }],
  [55, { description: "Heavy Drizzle", icon: Drizzle }],
  [56, { description: "Light Freezing Drizzle", icon: Drizzle }],
  [57, { description: "Freezing Drizzle", icon: Drizzle }],
  [80, { description: "Light Showers", icon: Drizzle }],
  [81, { description: "Showers", icon: Rain }],
  [82, { description: "Heavy Showers", icon: Rain }],
  [61, { description: "Light Rain", icon: Rain }],
  [63, { description: "Rain", icon: Rain }],
  [65, { description: "Heavy Rain", icon: Rain }],
  [66, { description: "Light Freezing Rain", icon: Rain }],
  [67, { description: "Freezing Rain", icon: Rain }],
  [77, { description: "Snow Grains", icon: Snow }],
  [85, { description: "Light Snow Showers", icon: Snow }],
  [86, { description: "Snow Showers", icon: Snow }],
  [71, { description: "Light Snow", icon: Snow }],
  [73, { description: "Snow", icon: Snow }],
  [75, { description: "Heavy Snow", icon: Snow }],
  [95, { description: "Thunderstorm", icon: Storm }],
  [96, { description: "Light Thunderstorm with Hail", icon: Storm }],
  [99, { description: "Thunderstorm with Hail", icon: Storm }],
]);

type WeatherImageProps = {
  weatherCode: WeatherCodeType;
} & Parameters<WeatherData["icon"]>[0];

export const WeatherImage = component$<WeatherImageProps>(
  ({ weatherCode, ...rest }) => {
    const weather = WeatherCodeMap.get(weatherCode);

    if (!weather) throw new Error(`Weather Code Not Found: ${weatherCode}`);

    const Image = weather.icon;
    return <Image alt={weather.description} {...rest} />;
  }
);
