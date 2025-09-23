import { component$, PropsOf } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { styled } from "~/styled-system/jsx";

import SearchIcon from "~/assets/images/icon-search.svg?jsx";

const SearchInputRecipe = styled("div", {
  base: {
    position: "relative",
    display: "inline-block",
    width: "100%",
  },
});

export const Input = styled("input", {
  base: {
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
});

export const SearchInput = component$<PropsOf<"input">>((props) => {
  return (
    <SearchInputRecipe>
      <SearchIcon
        class={css({
          position: "absolute",
          left: 24,
          top: "50%",
          transform: "translateY(-50%)",
          width: 20,
          height: 20,
          pointerEvents: "none",
        })}
      />
      <Input paddingLeft={60} type="text" {...props} />
    </SearchInputRecipe>
  );
});
