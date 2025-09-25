import { cva, RecipeVariantProps } from "~/styled-system/css";
import { styled } from "~/styled-system/jsx";

const buttonRecipe = cva({
  base: {
    fontWeight: "medium",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    textStyle: "heading.5",
    transition: "background-color 0.2s ease-in-out",
    justifyContent: "center",
  },
  variants: {
    variant: {
      primary: {
        bg: "primary",
        _hover: {
          bg: "primary.muted",
        },
        _active: {
          bg: "primary",
          boxShadow:
            "0 0 0 3px {colors.background}, 0 0 0 5px {colors.primary}",
        },
      },
      default: {
        bg: "neutral.800",
        _hover: {
          bg: "neutral.700",
        },
        _active: {
          bg: "neutral.800",
          boxShadow:
            "0 0 0 3px {colors.background}, 0 0 0 5px {colors.neutral.800}",
        },
      },
    },
    size: {
      sm: {
        paddingX: "16",
        paddingY: "8",
        gap: "12",
        borderRadius: "8",
        textStyle: "heading.7",
      },
      md: {
        paddingX: "16",
        paddingY: "12",
        gap: "10",
        borderRadius: "8",
        textStyle: "heading.7",
      },
      lg: {
        paddingX: "24",
        paddingY: "16",
        gap: "16",
        borderRadius: "input",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export const Button = styled("button", buttonRecipe);
export type ButtonVariantProps = RecipeVariantProps<typeof buttonRecipe>;
