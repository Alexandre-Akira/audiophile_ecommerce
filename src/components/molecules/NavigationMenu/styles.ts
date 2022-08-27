import { styled } from "@/styles/stitches.config";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export const StyledMenuContainer = styled(NavigationMenu.Root, {
  display: "flex",
  justifyContent: "center",
});

export const StyledMenuList = styled(NavigationMenu.List, {
  display: "flex",
  alignItems: "center",
});

export const StyledMenuItem = styled(NavigationMenu.Item, {
  color: "$grey_scale_slot1",
  "&:hover": {
    color: "$orange_scale_slot2",
  },
  "&:nth-child(2)": {
    marginLeft: 34,
    marginRight: 17,
  },
  "&:nth-child(3)": {
    marginLeft: 17,
    marginRight: 34,
  },
});
