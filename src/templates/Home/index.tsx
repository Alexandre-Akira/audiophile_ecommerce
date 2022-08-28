import * as React from "react";
import { HomeHeader } from "@/components/organisms/headers/HomeHeader";
import { StyledHeaderContainer } from "./styles";

export const HomeTemplate: React.FunctionComponent = () => {
  return (
    <>
      <StyledHeaderContainer>
        <HomeHeader />
      </StyledHeaderContainer>
      <main> main </main>
      <footer> footer </footer>
    </>
  );
};
