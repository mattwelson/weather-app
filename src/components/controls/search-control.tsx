import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { SearchInput } from "../ui/input";
import { Button } from "../ui/button";

export const SearchControl = component$(() => {
  return (
    <div
      class={css({
        display: "flex",
        gap: 12,
        alignContent: "stretch",
        flexDirection: "column",
      })}
    >
      <SearchInput placeholder="Search for a place..." />
      <Button size="lg" variant="primary">
        Search
      </Button>
    </div>
  );
});
