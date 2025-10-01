import { createContextId, type Signal } from "@builder.io/qwik";

export interface UnitsContextType {
  temperature: "celcius" | "farenheit";
  wind: "km/h" | "mph";
  preciptitation: "mm" | "inch";
}

export const UnitsContext = createContextId<Signal<UnitsContextType>>("units");
