import React from "react";
import tw from "twin.macro";
import type { LayoutProperties } from "../../../models";
import { Footer } from "../../atoms/footer";

const LayoutBox = tw.div`min-h-screen bg-background-gray`;

const MainBox = tw.div`flex flex-col items-center`;

const Main = tw.div`mr-auto ml-64.75`;

const Layout: React.FC<LayoutProperties> = ({ children, ...rest }) => (
  <LayoutBox {...rest}>
    <MainBox>
      <Main role={"main"}>{children}</Main>
      <Footer />
    </MainBox>
  </LayoutBox>
);

export { Layout };
