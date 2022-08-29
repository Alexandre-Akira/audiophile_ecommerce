import { styled } from "@/styles/stitches.config";
import { OverLineText, BodyText } from "@/components/atoms/Text";

export const StyledContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  height: 610,
});

export const StyledContentContainer = styled("div", {
  marginRight: 52,
});

export const StyledOverlineText = styled(OverLineText, {
  marginBottom: 24,
});

export const StyledBodyText = styled(BodyText, {
  marginTop: 24,
  marginBottom: 40,
});

export const StyledPictureContainer = styled("div", {
  opacity: 0.4,
});
