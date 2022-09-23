import type { FC } from "react";
import tw, { css } from "twin.macro";
import type { TwStyle } from "twin.macro";
import type { HeadingProperties, ColorVariant } from "./type/model";

const HeadingBase = tw.h1`font-zen text-text text-5xl select-none`;

// eslint-disable-next-line consistent-return
const getColor = (color: ColorVariant): TwStyle => {
  switch (color) {
    case "yellow":
      return tw`text-primary-yellow`;
    case "green":
      return tw`text-primary-green`;
    case "blue":
      return tw`text-primary-blue`;
    case "purple":
      return tw`text-primary-purple`;
    case "red":
      return tw`text-primary-red`;
    // no default
  }
};

const Heading: FC<HeadingProperties> = ({ color = "yellow", children, ...rest }) => (
  <HeadingBase
    css={css`
      &::first-letter {
        ${getColor(color)}
      }
    `}
    {...rest}
  >
    {children}
  </HeadingBase>
);

export { Heading };
