import { NavigationMenuType } from "./types";
import { StyledMenuList, StyledMenuItem, StyledMenuContainer } from "./styles";
import Link from "next/link";

export const NavigationMenu: React.FunctionComponent<NavigationMenuType> = ({
  links,
}) => {
  return (
    <StyledMenuContainer>
      <StyledMenuList>
        {links.map((link, index) => {
          return (
            <StyledMenuItem key={index}>
              <Link href={link.path}>
                <a>{link.description}</a>
              </Link>
            </StyledMenuItem>
          );
        })}
      </StyledMenuList>
    </StyledMenuContainer>
  );
};
