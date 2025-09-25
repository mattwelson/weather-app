import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { Button } from "../ui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItemGroup,
  DropdownItemHeader,
  DropdownItem,
  DropdownSeperator,
} from "../ui/dropdown";
import { RadioButtonGroup, RadioButton } from "../ui/radio-button-group";

import Settings from "~/assets/images/icon-units.svg?jsx";
import Down from "~/assets/images/icon-dropdown.svg?jsx";

export const UnitsControl = component$(() => {
  return (
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
  );
});
