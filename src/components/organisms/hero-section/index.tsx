import type { FC } from "react";
import tw, { css } from "twin.macro";
import type { HeroSectionProperties } from "../../../models";
import { Text } from "../../atoms/text";

const HeroSectionContainer = tw.header`flex flex-col`;

const Background = tw.div`flex flex-col items-center justify-center space-y-[calc(200vw / 63)] w-full h-[calc(200vw / 3)] lg:h-screen bg-center bg-cover`;

const Logo = tw.img`w-[calc(8200vw / 189)]`;

const HeroSection: FC<HeroSectionProperties> = ({ date, title, ...rest }) => (
  <HeroSectionContainer {...rest}>
    <Background
      css={css`
        background-image: linear-gradient(rgba(34, 31, 31, 0.9), rgba(34, 31, 31, 0.9)), url("/statics/gogo.webp");
      `}
    >
      <Text css={tw`text-[calc(16px + 16 * ((100vw - 378px) / 1134))]`}>{title}</Text>
      <Logo src="/statics/logo.webp" alt="第57回鈴鹿高専祭、Re:ROADのロゴ" width={1212} height={247} />
      <Text css={tw`text-[calc(16px + 16 * ((100vw - 378px) / 1134))]`}>{date}</Text>
    </Background>
  </HeroSectionContainer>
);

export { HeroSection };
