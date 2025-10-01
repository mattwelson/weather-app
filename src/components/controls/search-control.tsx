import {
  $,
  component$,
  noSerialize,
  Resource,
  useResource$,
  useSignal,
  useStore,
  useTask$,
} from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { SearchInput } from "../ui/input";
import { Button } from "../ui/button";
import { fetchSearchLocation, fetchWeather } from "~/data/fetchers";
import { LocationResponseType } from "~/data/types";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownItemGroup,
} from "../ui/dropdown";

export const SearchControl = component$(() => {
  const searchTerm = useSignal("Berlin");
  const searchResult = useSignal<LocationResponseType[]>();

  useTask$(async ({ track }) => {
    track(searchTerm);
    if (searchTerm.value.length < 3) return;

    const controller = noSerialize(new AbortController());

    const { results } = await fetchSearchLocation(searchTerm.value, controller);

    searchResult.value = results;
    // TODO: handle no results (or should this have thrown?)
    return () => controller?.abort();
  });

  return (
    <div
      class={css({
        display: "flex",
        gap: 12,
        alignContent: "stretch",
        flexDirection: "column",
        width: 656,
        maxWidth: "100%",
        mx: "auto",
        md: {
          gap: 16,
          flexDirection: "row",
          justifyContent: "center",
        },
      })}
    >
      <div class={css({ width: "100%" })}>
        <SearchInput
          placeholder="Search for a place..."
          value={searchTerm.value}
          onInput$={(e, el) => (searchTerm.value = el.value)}
        />
        <Dropdown
          initialOpen={searchResult.value && searchResult.value.length > 0}
        >
          <DropdownContent>
            <DropdownItemGroup>
              {searchResult.value?.map((result) => (
                <DropdownItem>
                  {result.name}, {result.admin1}, {result.country}
                </DropdownItem>
              ))}
            </DropdownItemGroup>
          </DropdownContent>
        </Dropdown>
      </div>
      <Button
        size="lg"
        variant="primary"
        onClick$={$(async () => {
          const weather = await fetchWeather(52.52, 13.41);
          console.log({ weather });
        })}
      >
        Search
      </Button>
    </div>
  );
});
