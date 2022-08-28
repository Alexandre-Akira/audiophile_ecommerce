import { styled } from "@/styles/stitches.config";

export const StyledButton = styled("button", {
  paddingY: 15,
  paddingX: 31,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: "17.76px",
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: 1,
  cursor: "pointer",

  defaultVariants: {
    variant: "orange",
  },
  variants: {
    variant: {
      orange: {
        backgroundColor: "$orange_scale_slot2",
        border: "none",
        color: "$grey_scale_slot1",
        "&:hover": {
          backgroundColor: "$orange_scale_slot1",
        },
      },
      white: {
        backgroundColor: "$grey_scale_slot1",
        borderWidth: 1,
        borderStyle: "solid",
        "&:hover": {
          backgroundColor: "$black_scale_slot1",
        },
      },
      transparent: {
        backgroundColor: "transparent",
        border: "none",
        color: "$black_scale_slot2",
        "& svg": {
          marginLeft: 13.32,
        },
        "&:hover": {
          color: "$orange_scale_slot2",
          opacity: 1,
        },
      },
    },
  },
});
