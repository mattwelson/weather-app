import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/button";
import { Input, SearchInput } from "~/components/ui/input";

import Settings from "~/assets/images/icon-units.svg?jsx";
import Down from "~/assets/images/icon-dropdown.svg?jsx";
import { VStack } from "~/styled-system/jsx";
import { css } from "~/styled-system/css";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownItemGroup,
  DropdownItemHeader,
  DropdownSeperator,
  DropdownTrigger,
} from "~/components/ui/dropdown";
import {
  RadioButton,
  RadioButtonGroup,
} from "~/components/ui/radio-button-group";

export default component$(() => {
  return (
    <div>
      <h2>Components Style Guide</h2>
      <div>
        <p>This is the components style guide page.</p>
      </div>
      <VStack gap="16" my="16">
        <p>
          The button makes use of the Panda Recipes to create a reusable button
          with default, hover and active states, variants and size options.
        </p>
        <Button variant="primary" size="lg">
          Search
        </Button>
        <Button>
          <Settings /> Units <Down class={css({ w: 12, h: 18 })} />
        </Button>
        <Button size="sm">
          Tuesday <Down class={css({ w: 12, h: 18 })} />
        </Button>
      </VStack>
      <div>
        <p>
          The input makes use of the Panda Recipe to create a reusable input
        </p>
        <Input placeholder="Search for a city, e.g. New York" />
        <SearchInput placeholder="Search for a city, e.g. New York" />
      </div>

      <VStack gap="16" my="16">
        <h2>Dropdown (not finished)</h2>
        <p>
          The dropdown component is not finished yet, but it will make use of
          the Panda Slots to create a reusable dropdown with a trigger and
          content slots.
        </p>
        <Dropdown align="end">
          <DropdownTrigger>
            <Settings /> Units <Down class={css({ w: 12, h: 18 })} />
          </DropdownTrigger>
          <DropdownContent>
            <Button size="sm" class={css({ width: "100%", px: 8 })}>
              Switch to Imperial
            </Button>
            <DropdownItemGroup>
              <DropdownItemHeader>Temperature</DropdownItemHeader>
              <DropdownItem>
                <RadioButtonGroup value="celsius">
                  <RadioButton value="celsius">Celsius (°C)</RadioButton>
                  <RadioButton value="fahrenheit">Fahrenheit (°F)</RadioButton>
                </RadioButtonGroup>
              </DropdownItem>
            </DropdownItemGroup>
            <DropdownSeperator />
            <DropdownItemGroup>
              <DropdownItemHeader>Wind Speed</DropdownItemHeader>
              <DropdownItem>
                <RadioButtonGroup value="km/h">
                  <RadioButton value="km/h">km/h</RadioButton>
                  <RadioButton value="mp/h">mp/h</RadioButton>
                </RadioButtonGroup>
              </DropdownItem>
            </DropdownItemGroup>
            <DropdownSeperator />
            <DropdownItemGroup>
              <DropdownItemHeader>Precipitation</DropdownItemHeader>
              <DropdownItem>
                <RadioButtonGroup value="mm">
                  <RadioButton value="mm">Millimeters (mm)</RadioButton>
                  <RadioButton value="in">Inches (in)</RadioButton>
                </RadioButtonGroup>
              </DropdownItem>
            </DropdownItemGroup>
          </DropdownContent>
        </Dropdown>
      </VStack>

      <VStack gap="16" my="16">
        <p>
          The Today image asset is set up as a token on bg.today and bg.today.lg
        </p>
        <div
          class={css({
            w: 346,
            h: 286,
            backgroundImage: "today",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          })}
        />
        <div
          class={css({
            maxW: 800,
            h: 286,
            aspectRatio: "auto 800 / 286",
            backgroundImage: "todayLg",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          })}
        />
      </VStack>
    </div>
  );
});
