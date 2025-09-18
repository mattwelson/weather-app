import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { Container, Stack } from "~/styled-system/jsx";
import { hstack, square, stack } from "~/styled-system/patterns";

export default component$(() => {
  return (
    <Container maxWidth={"3xl"} padding="8">
      <Stack gap="32">
        <h1>Style Guide</h1>
        <p>This is the style guide page.</p>

        <h2>Colours</h2>

        <div>
          <h3 class={css({ textStyle: "heading.3", my: "4" })}>Neutral</h3>
          <div class={hstack({ gap: "8" })}>
            <div
              class={square({
                size: "64",
                bg: "neutral.900",
                border: "white 1px solid",
                borderRadius: "4",
              })}
            ></div>
            <div
              class={square({
                size: "64",
                bg: "neutral.800",
                border: "white 1px solid",
                borderRadius: "4",
              })}
            ></div>
            <div
              class={square({
                size: "64",
                bg: "neutral.700",
                border: "white 1px solid",
                borderRadius: "4",
              })}
            ></div>
            <div
              class={square({
                size: "64",
                bg: "neutral.600",
                border: "white 1px solid",
                borderRadius: "4",
              })}
            ></div>
            <div
              class={square({
                size: "64",
                bg: "neutral.300",
                border: "white 1px solid",
                borderRadius: "4",
              })}
            ></div>
            <div
              class={square({
                size: "64",
                bg: "neutral.200",
                border: "white 1px solid",
                borderRadius: "4",
              })}
            ></div>
            <div
              class={square({
                size: "64",
                bg: "white",
                border: "white 1px solid",
                borderRadius: "4",
              })}
            ></div>
          </div>
        </div>
        <div>
          <h3 class={css({ textStyle: "heading.3", my: "4" })}>Primary</h3>
          <div class={hstack({ gap: "8" })}>
            <div
              class={square({
                size: "64",
                bg: "primary",
                border: "white 1px solid",
                borderRadius: "4",
              })}
            ></div>
            <div
              class={square({
                size: "64",
                bg: "primary.muted",
                border: "white 1px solid",
                borderRadius: "4",
              })}
            ></div>
          </div>
        </div>
        <div>
          <h3 class={css({ textStyle: "heading.3", my: "4" })}>Secondary</h3>
          <div class={hstack({ gap: "8" })}>
            <div
              class={square({
                size: "64",
                bg: "secondary",
                border: "white 1px solid",
                borderRadius: "4",
              })}
            ></div>
          </div>
        </div>

        <h2 class={css({ textStyle: "heading.3", my: "4" })}>Typography</h2>

        <div class={stack({ gap: "8" })}>
          <div>
            <div>
              <pre>heading.1</pre>
            </div>
            <h1 class={css({ textStyle: "heading.1" })}>Heading 1</h1>
          </div>
          <div>
            <div>
              <pre>heading.2</pre>
            </div>
            <h2 class={css({ textStyle: "heading.2" })}>Heading 2</h2>
          </div>
          <div>
            <div>
              <pre>heading.3</pre>
            </div>
            <h3 class={css({ textStyle: "heading.3" })}>Heading 3</h3>
          </div>
          <div>
            <div>
              <pre>heading.4</pre>
            </div>
            <h4 class={css({ textStyle: "heading.4" })}>Heading 4</h4>
          </div>
          <div>
            <div>
              <pre>heading.5</pre>
            </div>
            <h4 class={css({ textStyle: "heading.5" })}>Heading 5</h4>
          </div>
          <div>
            <div>
              <pre>heading.5 (medium)</pre>
            </div>
            <h4 class={css({ textStyle: "heading.5", fontWeight: "medium" })}>
              Heading 5 Medium
            </h4>
          </div>
        </div>
      </Stack>
    </Container>
  );
});
