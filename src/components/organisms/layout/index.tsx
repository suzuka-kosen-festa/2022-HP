import type { FC } from "react";
import tw, { css } from "twin.macro";
import { useRoute } from "wouter";
import { useInView } from "react-intersection-observer";
import type { LayoutProperties } from "./types/model";
import { HeroSection } from "../hero-section";
import { Footer } from "../footer";
import { Header } from "../header";

const LayoutBox = tw.div`min-h-screen bg-white`;

const MainBox = tw.div`flex flex-col items-center relative z-10 space-y-6 sm:space-y-16`;

const MainWrapper = tw.div`mx-auto w-full max-w-main md:max-w-main-md  space-y-10 sm:space-y-20`;

const lists = [
  {
    link: "/",
    color: tw`text-primary-yellow`,
    name: "Top",
  },
  {
    link: "/member",
    color: tw`text-primary-red`,
    name: "Members",
  },
  {
    link: "/timetable",
    color: tw`text-primary-green`,
    name: "Schedule",
  },
  {
    link: "/bazaar",
    color: tw`text-primary-purple`,
    name: "Bazaar",
  },
  {
    link: "/sponsors",
    color: tw`text-primary-blue`,
    name: "Sponsors",
  },
];

const Layout: FC<LayoutProperties> = ({ children }) => {
  const [match] = useRoute("/");
  const { ref, inView } = useInView({
    rootMargin: "-50% 0px",
  });
  return (
    <LayoutBox>
      {match ? (
        <Header
          headerLinks={lists}
          css={
            inView
              ? css`
                  animation-name: fadein;
                  animation-duration: 1s;
                  animation-iteration-count: 1;
                  animation-fill-mode: forwards;
                  @keyframes fadein {
                    0% {
                      opacity: 0;
                      display: none;
                    }
                    100% {
                      opacity: 1;
                      display: flex;
                    }
                  }
                `
              : tw`hidden`
          }
        />
      ) : (
        <Header headerLinks={lists} />
      )}
      {match ? <HeroSection date="2022.10.30-31" title="第57回鈴鹿高専祭" /> : null}
      <MainBox css={match ? tw`pt-6 md:pt-16` : tw`pt-main md:pt-main-md`}>
        <MainWrapper ref={ref}>{children}</MainWrapper>
        <Footer link="https://github.com/suzuka-kosen-festa/2022-HP/blob/main/LICENSE">
          第57回鈴鹿高専祭実行委員会
        </Footer>
      </MainBox>
    </LayoutBox>
  );
};

export { Layout };
