import type { FC } from "react";
import tw, { css } from "twin.macro";
import { useMemo } from "react";
import type { TitleProperties } from "./types/model";

const TitleWrapper = tw.div`relative`;

const TitleContainer = tw.h1`absolute font-zen text-text font-bold select-none text-ink top-ink-top left-ink-left md:(text-ink-md top-ink-top-md left-ink-left-md)`;

const Title: FC<TitleProperties> = ({ children, colorKey, ...rest }) => {
  // eslint-disable-next-line consistent-return
  const inkPath = useMemo(() => {
    switch (colorKey) {
      case "yellow":
        return "/statics/Ink3_yellow.webp";
      case "green":
        return "/statics/Ink3_green.webp";
      case "blue":
        return "/statics/Ink3_blue.webp";
      case "purple":
        return "/statics/Ink3_purple.webp";
      case "red":
        return "/statics/Ink3_red.webp";
      // no default
    }
  }, [colorKey]);
  return (
    <TitleWrapper {...rest}>
      <img
        css={css`
          aspect-ratio: auto;
          width: 25%;
          @media (max-width: 768px) {
            width: 45%;
          }
        `}
        src={inkPath}
        alt="ink"
        width={592}
        height={580}
        loading="eager"
      />
      <TitleContainer>{children}</TitleContainer>
    </TitleWrapper>
  );
};

export { Title };
