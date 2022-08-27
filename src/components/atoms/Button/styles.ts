import { styled } from "@/styles/stitches.config";

export const StyledButton = styled("button", {
  width: "100%",
  paddingY: 15,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: "17.76px",
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: 1,
  cursor: "pointer",

  defaultVariants: {
    variant: "primary",
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "$orange_scale_slot2",
        border: "none",
        color: "$grey_scale_slot1",
      },
      secondary: {
        backgroundColor: "$grey_scale_slot1",
        borderWidth: 1,
        borderStyle: "solid",
      },
      third: {
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
