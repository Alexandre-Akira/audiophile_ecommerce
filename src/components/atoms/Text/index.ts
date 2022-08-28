import { styled } from "@/styles/stitches.config";

export const BodyText = styled("text", {
  fontSize: 15,
  lineHeight: "25px",
  display: "block",

  defaultVariants: {
    variant: "black",
  },

  variants: {
    variant: {
      white: {
        color: "$grey_scale_slot1",
        opacity: 0.75,
      },
      black: {
        color: "$black_scale_slot1",
        opacity: 0.5,
      },
    },
  },
});

export const OverLineText = styled("text", {
  display: "block",
  fontSize: 14,
  lineHeight: "19px",
  letterSpacing: 10,
  textTransform: "capitalize",
  fontWeight: 400,
  defaultVariants: {
    variant: "white",
  },
  variants: {
    variant: {
      white: {
        color: "$grey_scale_slot1",
        opacity: 0.5,
      },
      orange: {
        color: "$orange_scale_slot1",
      },
    },
  },
});

export const SubTitleText = styled("text", {
  display: "block",
  fontSize: 13,
  lineHeight: "25px",
  letterSpacing: 1,
  textTransform: "capitalize",
});
