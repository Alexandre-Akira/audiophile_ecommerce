import { styled } from "@/styles/stitches.config";

export const StyledHeader = styled("header", {
  backgroundColor: "$black_scale_slot4",
  paddingX: 165,
  maxWidth: 1440,
});

export const StyledContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "32px 0 36px 0",
});

export const StyledDivider = styled("div", {
  width: "100%",
  height: 1,
  backgroundColor: "$grey_scale_slot1",
  opacity: 0.2,
});
