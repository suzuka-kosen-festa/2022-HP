import React from "react";
import tw from "twin.macro";
import type { LayoutProperties } from "../../../models";

const LayoutBox = tw.div`min-h-screen bg-background-gray`;

const MainBox = tw.div`flex flex-col`;

const Main = tw.div`mx-[calc(800vw / 63)]`;

const Layout: React.FC<LayoutProperties> = ({ children, ...rest }) => (
  <LayoutBox {...rest}>
    <MainBox>
      <Main role={"main"}>{children}</Main>
    </MainBox>
  </LayoutBox>
);

export { Layout };
