import { globalCss } from "@/styles/stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    pointerEvents: "all",
  },
  body: {
    display: "flex",
    flexDirection: "column",
  },
  "body, input, textarea, select, legend, button": {
    fontFamily: "$manrope",
  },
});
