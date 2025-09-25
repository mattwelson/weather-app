import { component$, Slot } from "@builder.io/qwik";

import Logo from "~/assets/images/logo.svg?jsx";
import { css } from "~/styled-system/css";

export const Header = component$(() => {
  return (
    <header
      class={css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      })}
    >
      <a href="/">
        <Logo />
      </a>
      <Slot />
    </header>
  );
});
