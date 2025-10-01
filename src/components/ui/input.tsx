import { component$, PropsOf } from "@builder.io/qwik";
import { cx, sva } from "~/styled-system/css";

import SearchIcon from "~/assets/images/icon-search.svg?jsx";

const searchInputRecipe = sva({
  slots: ["root", "icon", "input"],
  base: {
    root: {
      position: "relative",
      display: "inline-block",
      width: "100%",
    },
    input: {
      paddingLeft: 60,
      bg: "neutral.800",
      rounded: "input",
      paddingY: 16,
      paddingX: 24,
      textStyle: "heading.5",
      fontWeight: "medium",
      width: "100%",
      _hover: { bg: "neutral.700" },
      _focus: {
        bg: "neutral.800",
        boxShadow: "0 0 0 3px {colors.neutral.900}, 0 0 0 5px foreground",
      },
      _placeholder: { color: "neutral.200" },
    },
    icon: {
      position: "absolute",
      left: 24,
      top: "50%",
      transform: "translateY(-50%)",
      width: 20,
      height: 20,
      pointerEvents: "none",
    },
  },
});

export const SearchInput = component$<PropsOf<"input">>((props) => {
  const recipe = searchInputRecipe();
  return (
    <div class={recipe.root}>
      <SearchIcon class={recipe.icon} />
      <input
        type="text"
        {...props}
        class={cx(recipe.input, props.class as string | undefined)}
      />
    </div>
  );
});
