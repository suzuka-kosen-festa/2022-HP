import React from "react";
import tw from "twin.macro";
import type { LayoutProperties } from "../../../models";

const LayoutBox = tw.div`min-h-screen bg-[#211A1A]`;

const MainBox = tw.div`flex flex-col items-center`;

const Main = tw.div`mr-auto ml-64.75`;

const Layout: React.FC<LayoutProperties> = ({ children, ...rest }) => (
  <LayoutBox {...rest}>
    <MainBox>
      <Main>{children}</Main>
    </MainBox>
  </LayoutBox>
);

export { Layout };
