import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { InformationCard } from "~/components/cards/information-card";
import { TodayCard } from "~/components/cards/today-card";
import { SearchControl } from "~/components/controls/search-control";
import { css } from "~/styled-system/css";
import { VStack } from "~/styled-system/jsx";
import { grid, stack, vstack } from "~/styled-system/patterns";

const meta = [
  {
    heading: "Feels like",
    unit: "°",
    value: 18,
  },
  {
    heading: "Humidity",
    unit: "%",
    value: 46,
  },
  {
    heading: "Wind",
    unit: " km/h",
    value: 14,
  },
  {
    heading: "Precipitation",
    unit: " mm",
    value: 0,
  },
];

const daily = [
  {
    date: new Date("2025-09-23"),
    weatherCode: "showers",
    temperatureMax: 20,
    temperatureMin: 14,
  },
];

export default component$(() => {
  return (
    <div class={vstack({ gap: 32, alignItems: "stretch", lg: { gap: 48 } })}>
      <SearchControl />
      <div
        class={css({
          xl: {
            display: "grid",
            gridTemplateColumns: "1fr 384px",
            gap: 32,
          },
        })}
      >
        <div>
          <div
            class={vstack({
              gap: {
                base: 20,
                md: 32,
              },
              alignItems: "stretch",
            })}
          >
            <TodayCard
              name="Berlin, Germany"
              date={new Date()}
              temperature={20}
              weatherCode={0}
            />
            <div
              class={grid({
                columns: {
                  base: 2,
                  md: 4,
                },
                gap: 20,
              })}
            >
              {meta.map((data) => (
                <InformationCard.Root>
                  <InformationCard.Heading>
                    {data.heading}
                  </InformationCard.Heading>
                  <InformationCard.Value>
                    {data.value}
                    {data.unit}
                  </InformationCard.Value>
                </InformationCard.Root>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
