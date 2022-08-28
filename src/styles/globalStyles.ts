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

  a: {
    color: "inherit",
    textDecoration: "none",
    cursor: "pointer",
  },
  li: {
    listStyle: "none",
  },

  // FONT STYLES
  "h1, h2, h3, h4, h5, h6": {
    textTransform: "capitalize",
  },
});
