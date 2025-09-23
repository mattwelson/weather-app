import {
  Signal,
  QRL,
  createContextId,
  component$,
  useSignal,
  $,
  useContextProvider,
  useOnDocument,
  Slot,
  useContext,
  useOn,
} from "@builder.io/qwik";
import { Button, ButtonVariantProps } from "./button";
import { sva, type RecipeVariantProps } from "~/styled-system/css";

// TODO: add variants like align
const dropdownRecipe = sva({
  slots: [
    "root",
    "trigger",
    "content",
    "itemHeader",
    "item",
    "itemGroup",
    "seperator",
  ],
  base: {
    root: { position: "relative", fontSize: 16 },
    content: {
      position: "absolute",
      top: "100%",
      mt: "8",
      bg: "neutral.800",
      border: "1px solid {colors.neutral.600}",
      borderRadius: "12",
      px: "8",
      py: "6",
      width: "screen",
      maxWidth: "214",
      display: "flex",
      flexDirection: "column",
      gap: "4",
    },
    itemHeader: {
      color: "neutral.300",
      px: "8",
      pt: "6",
      fontSize: 14,
    },
    itemGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "8",
    },
    seperator: {
      height: "1px",
      bg: "neutral.600",
    },
  },
  variants: {
    align: {
      end: {
        content: {
          right: 0,
        },
      },
    },
  },
});

type DropdownVariants = RecipeVariantProps<typeof dropdownRecipe>;

interface DropdownContextType {
  isOpen: Signal<boolean>;
  toggle: QRL<() => void>;
  close: QRL<() => void>;
  open: QRL<() => void>;
  recipe: ReturnType<typeof dropdownRecipe>;
}

const DropdownContext =
  createContextId<DropdownContextType>("dropdown-context");

/**
 * Root component for Dropdown component
 */
export const Dropdown = component$<DropdownVariants>((props) => {
  const dropdownClasses = dropdownRecipe(props);
  const isOpen = useSignal(false);

  const toggle = $(() => {
    isOpen.value = !isOpen.value;
  });

  const close = $(() => {
    isOpen.value = false;
  });

  const open = $(() => {
    isOpen.value = true;
  });

  useContextProvider(DropdownContext, {
    isOpen,
    toggle,
    close,
    open,
    recipe: dropdownClasses,
  });

  // TODO: Close dropdown when clicking outside

  useOnDocument(
    "keydown",
    $((event) => {
      if (event.key === "Escape" && isOpen.value) {
        close();
      }
    })
  );

  return (
    <div class={dropdownClasses.root}>
      <Slot />
    </div>
  );
});

// TODO: button styles as props
export const DropdownTrigger = component$<ButtonVariantProps>((props) => {
  const { toggle, recipe } = useContext(DropdownContext);

  return (
    <Button {...props} onClick$={toggle} class={recipe.trigger}>
      <Slot />
    </Button>
  );
});

export const DropdownContent = component$(() => {
  const { isOpen, close, recipe } = useContext(DropdownContext);

  if (!isOpen.value) return null;

  // Close dropdown when clicking outside
  useOnDocument(
    "click",
    $((event, currentTarget) => {
      if (currentTarget.contains(event.target as Node)) return;
      close();
    })
  );

  return (
    <div stoppropagation:click class={recipe.content}>
      <Slot />
    </div>
  );
});

export const DropdownItem = component$(() => {
  const { recipe } = useContext(DropdownContext);

  return (
    <div class={recipe.item}>
      <Slot />
    </div>
  );
});

export const DropdownItemHeader = component$(() => {
  const { recipe } = useContext(DropdownContext);

  return (
    <div class={recipe.itemHeader}>
      <Slot />
    </div>
  );
});

export const DropdownItemGroup = component$(() => {
  const { recipe } = useContext(DropdownContext);

  return (
    <div class={recipe.itemGroup}>
      <Slot />
    </div>
  );
});

export const DropdownSeperator = component$(() => {
  const { recipe } = useContext(DropdownContext);

  return <div class={recipe.seperator} />;
});
