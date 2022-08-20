import React from "react";
import tw, { css } from "twin.macro";
import type { HeroSectionProperties } from "../../../models";
import { Text } from "../../atoms/text";

const HeroSectionContainer = tw.section`flex flex-col`;

const Backgorund = tw.div`flex flex-col items-center justify-center w-full h-[calc(200vw / 3)] lg:h-screen bg-center bg-cover`;

const HeroSection: React.FC<HeroSectionProperties> = ({ date, title, ...rest }) => (
  <HeroSectionContainer aria-label={"第57回鈴鹿高専祭"} {...rest}>
    <Backgorund
      css={css`
        background-image: linear-gradient(rgba(34, 31, 31, 0.9), rgba(34, 31, 31, 0.9)), url("/statics/gogo.webp");
      `}
    >
      <Text css={tw`text-[calc(12px + 36 * ((100vw - 378px) / 1134))]`}>{title}</Text>
      <img src={"/statics/logo.webp"} alt={"第57回鈴鹿高専祭、Re:ROADのロゴ"} width={1212} height={247} css={tw`w-[calc(8200vw / 189)]`} />
      <Text css={tw`text-[calc(12px + 36 * ((100vw - 378px) / 1134))]`}>{date}</Text>
    </Backgorund>
  </HeroSectionContainer>
);

export { HeroSection };
