import { component$, Slot } from "@builder.io/qwik";
import { sva } from "~/styled-system/css";

const informationCardRecipe = sva({
  slots: ["root", "heading", "value"],
  base: {
    root: {
      bg: "neutral.800",
      border: "1px solid {colors.neutral.600}",
      borderRadius: "12",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 24,
    },
    heading: {
      fontSize: 18,
      fontWeight: 500,
    },
    value: {
      textStyle: "heading.3",
    },
  },
});

const Root = component$(() => {
  const recipe = informationCardRecipe();
  return (
    <section>
      <dl class={recipe.root}>
        <Slot />
      </dl>
    </section>
  );
});

const Heading = component$(() => {
  const recipe = informationCardRecipe();
  return (
    <dt class={recipe.heading}>
      <Slot />
    </dt>
  );
});

const Value = component$(() => {
  const recipe = informationCardRecipe();
  return (
    <dd class={recipe.value}>
      <Slot />
    </dd>
  );
});

export const InformationCard = {
  Root,
  Heading,
  Value,
};
