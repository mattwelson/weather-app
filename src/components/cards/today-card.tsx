import { component$, FunctionComponent } from "@builder.io/qwik";
import { sva } from "~/styled-system/css";

import sunny from "~/assets/images/icon-sunny.webp";
import { hstack } from "~/styled-system/patterns";
import { formatDate } from "date-fns";

const weatherIcons = {
  sunny,
};

interface TodayCardProps {
  name: string;
  date: Date;
  temperature: number;
  weatherIcon: keyof typeof weatherIcons;
}

const todayCardRecipe = sva({
  slots: ["root", "heading", "headingGroup", "temperature", "icon", "date"],
  base: {
    root: {
      width: "100%",
      maxWidth: "100%",
      aspectRatio: "356 / 286",
      backgroundImage: "today",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      overflow: "hidden",
      borderRadius: "20",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: 16,
      sm: {
        width: 800,
        aspectRatio: "800 / 286",
        backgroundImage: "todayLg",
        flexDirection: "row",
        justifyContent: "space-between",
        px: 24,
      },
    },
    icon: {
      width: 120,
      height: 120,
    },
    temperature: {
      textStyle: "heading.1",
    },
    heading: {
      textStyle: "heading.4",
    },
    headingGroup: {
      display: "flex",
      gap: 12,
      flexDirection: "column",
      alignItems: "center",
      sm: {
        alignItems: "start",
      },
    },
  },
});

export const TodayCard = component$<TodayCardProps>(
  ({ name, date, temperature, weatherIcon }) => {
    const recipe = todayCardRecipe();
    return (
      <div class={recipe.root}>
        <div class={recipe.headingGroup}>
          <div class={recipe.heading}>{name}</div>
          <div class={recipe.date}>{formatDate(date, "PPPP")}</div>
        </div>
        <div class={hstack()}>
          <img src={weatherIcons[weatherIcon]} class={recipe.icon} />
          <div class={recipe.temperature}>{temperature}°</div>
        </div>
      </div>
    );
  }
);
