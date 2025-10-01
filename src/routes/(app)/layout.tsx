import { component$, Slot } from "@builder.io/qwik";
import { UnitsControl } from "~/components/controls/units-control";
import { Header } from "~/components/header";
import { css } from "~/styled-system/css";

export default component$(() => {
  return (
    <div
      class={css({
        maxWidth: 1216,
        mx: "auto",
        p: 16,
        pb: 48,
        display: "flex",
        flexDirection: "column",
        gap: 48,
        md: {
          p: 24,
          pb: 80,
        },
      })}
    >
      <Header>
        <UnitsControl />
      </Header>
      <h1
        class={css({
          textStyle: "heading.2",
          textAlign: "center",
        })}
      >
        How's the sky looking today?
      </h1>
      <Slot />
    </div>
  );
});
