import { component$, Slot } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { Container, VStack } from "~/styled-system/jsx";

export default component$(() => {
  return (
    <div class={css({})}>
      <VStack gap={"4"} padding="8">
        <a href="/style-guide">Style Guide</a>
        <a href="/style-guide/components">Components</a>
        {/* TODO: do that route thing to map over a table of contents */}
      </VStack>
      <Container maxWidth={"3xl"} padding="8">
        <Slot />
      </Container>
    </div>
  );
});
