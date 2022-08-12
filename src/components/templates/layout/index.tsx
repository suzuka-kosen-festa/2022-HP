import React from "react";
import tw from "twin.macro";
import type { LayoutProperties } from "../../../models";
import { Footer } from "../../organisms/footer";

const LayoutBox = tw.div`min-h-screen bg-background-gray`;

const MainBox = tw.div`flex flex-col items-center`;

const Main = tw.div`mr-auto ml-64.75`;

const Layout: React.FC<LayoutProperties> = ({ children, ...rest }) => (
  <LayoutBox {...rest}>
    <MainBox>
      <Main role={"main"}>{children}</Main>
      <Footer link={"https://github.com/suzuka-kosen-festa/2022-HP/blob/main/LICENSE"}>
        &copy; 第57回鈴鹿高専祭実行委員会
      </Footer>
    </MainBox>
  </LayoutBox>
);

export { Layout };
