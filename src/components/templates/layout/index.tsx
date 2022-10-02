import type { FC } from "react";
import tw from "twin.macro";
import type { LayoutProperties } from "../../../models";
import { Footer } from "../../organisms/footer";
import { HeroSection } from "../../organisms/hero-section";

const LayoutBox = tw.div`min-h-screen bg-background-gray`;

const MainBox = tw.div`flex flex-col space-y-[calc(4300vw / 378)]`;

const Main = tw.main`mx-[calc(800vw / 63)] space-y-[calc(4300vw / 378)]`;

const Layout: FC<LayoutProperties> = ({ children, ...rest }) => (
  <LayoutBox {...rest}>
    <MainBox>
      <HeroSection date="2022.10.30-31" title="第57回鈴鹿高専祭" />
      <Main>{children}</Main>
      <Footer link="https://github.com/suzuka-kosen-festa/2022-HP/blob/main/LICENSE">第57回鈴鹿高専祭実行委員会</Footer>
    </MainBox>
  </LayoutBox>
);

export { Layout };
