import * as React from "react";
import { NavigationMenu } from "@/components/molecules/NavigationMenu";
import { StyledContainer, StyledDivider, StyledHeader } from "./styles";
import { Logo } from "@/assets/Logo";
import { ShoppingCart } from "@/assets/ShoppingCart";
import { Advertisement } from "@/components/molecules/Advertisement";
import Link from "next/link";

interface IHomeHeaderProps {}

export const HomeHeader: React.FunctionComponent<IHomeHeaderProps> = (
  props
) => {
  const menuLinks = [
    { path: "/home", description: "Home" },
    { path: "/headphones", description: "Headphones" },
    { path: "/speakers", description: "Speakers" },
    { path: "/earphones", description: "Earphones" },
  ];

  return (
    <StyledHeader>
      <StyledContainer>
        <Logo />
        <NavigationMenu links={menuLinks} />
        <Link href="/shoppingCart">
          <ShoppingCart />
        </Link>
      </StyledContainer>
      <StyledDivider />
      <Advertisement />
    </StyledHeader>
  );
};
