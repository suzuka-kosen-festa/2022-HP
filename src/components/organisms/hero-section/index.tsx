import type { FC } from "react";
import tw, { css } from "twin.macro";
import type { HeroSectionProperties } from "./types/model";
import { SubHeading } from "../../atoms/sub-heading";

const HeroSectionContainer = tw.section`flex flex-col`;

const Background = tw.div`flex flex-col items-center justify-center w-full bg-center bg-cover px-hero space-y-3 sm:space-y-6 lg:(space-y-12 h-screen px-hero-lg)`;

const Logo = tw.img`w-full`;

const HeroText = tw(SubHeading)`font-medium text-xs sm:text-2xl lg:text-4xl`;

const HeroSection: FC<HeroSectionProperties> = ({ date, title, ...rest }) => (
  <HeroSectionContainer aria-label="第57回鈴鹿高専祭" {...rest}>
    <Background
      css={css`
        background-image: url("/statics/back.webp");
        aspect-ratio: 1920/ 1247;
      `}
    >
      <HeroText>{title}</HeroText>
      <Logo src="/statics/logo.png" alt="第57回鈴鹿高専祭、Re:ROADのロゴ" width={948} height={197} />
      <HeroText>{date}</HeroText>
    </Background>
  </HeroSectionContainer>
);

export { HeroSection };
