import {
  $,
  component$,
  createContextId,
  QRL,
  Signal,
  Slot,
  useContext,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";
import { sva } from "~/styled-system/css/sva";

import Checkmark from "~/assets/images/icon-checkmark.svg?jsx";

const radioButtonRecipe = sva({
  slots: ["root", "item"],
  base: {
    root: { display: "flex", flexDirection: "column", gap: "4" },
    item: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
      px: 8,
      py: 10,
      borderRadius: 8,
      cursor: "pointer",
      "& svg": { display: "none" },
      _hover: { bg: "neutral.700" },
      '&[aria-checked="true"]': {
        bg: "neutral.600",
        "& svg": { display: "block" },
      },
    },
  },
});

interface RadioButtonGroupContextType {
  selected: Signal<string | undefined>;
  select: QRL<(name: string) => void>;
  recipe: ReturnType<typeof radioButtonRecipe>;
}

interface RadioButtonGroupProps {
  value?: string | Signal<string>;
  onSelect?: QRL<(name: string) => void>;
}

const RadioButtonGroupContext =
  createContextId<RadioButtonGroupContextType>("dropdown-context");

/**
 * Root component for Dropdown component
 */
export const RadioButtonGroup = component$<RadioButtonGroupProps>(
  ({ value }) => {
    const recipe = radioButtonRecipe();
    const selected =
      typeof value === "string" || value === undefined
        ? useSignal(value)
        : value;

    const select = $((v: string) => {
      selected.value = v;
    });

    useContextProvider(RadioButtonGroupContext, {
      selected,
      select,
      recipe,
    });

    return (
      <div class={recipe.root}>
        <Slot />
      </div>
    );
  }
);

type RadioButtonProps = {
  value: string;
};

export const RadioButton = component$<RadioButtonProps>(({ value }) => {
  const { selected, select, recipe } = useContext(RadioButtonGroupContext);
  const isSelected = selected.value === value;

  return (
    <div
      aria-checked={isSelected}
      class={recipe.item}
      onClick$={() => select(value)}
    >
      <span>
        <Slot />
      </span>
      <Checkmark />
    </div>
  );
});
