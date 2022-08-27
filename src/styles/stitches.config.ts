import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  prefix: "audiophile-theme",
  theme: {
    colors: {
      // Orange Scale
      orange_scale_slot1: "#FBAF85",
      orange_scale_slot2: "#D87D4A",

      // Black Scale
      black_scale_slot1: "#000000",
      black_scale_slot2: "rgba(0, 0, 0, 0.5)",
      black_scale_slot3: "#101010",

      // Gray Scale
      grey_scale_slot1: "#FFFFFF",
      grey_scale_slot2: "#FAFAFA",
      grey_scale_slot3: "#F1F1F1",
    },
    fonts: {
      manrope: "Manrope, sans-serif",
    },
  },
  utils: {
    paddingX: (value: number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),

    paddingY: (value: number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    marginX: (value: number) => ({
      marginLeft: value,
      marginRight: value,
    }),

    marginY: (value: number) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});
