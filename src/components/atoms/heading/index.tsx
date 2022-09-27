import type { FC } from "react";
import tw, { css } from "twin.macro";
import { useMemo } from "react";
import type { HeadingProperties } from "./type/model";

const HeadingBase = tw.h1`font-zen text-text text-xl sm:text-5xl select-none`;

const Heading: FC<HeadingProperties> = ({ colorKey, children, ...rest }) => {
  // eslint-disable-next-line consistent-return
  const firstColor = useMemo(() => {
    switch (colorKey) {
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
  }, [colorKey]);
  return (
    <HeadingBase
      css={css`
        &::first-letter {
          color: ${firstColor};
        }
      `}
      {...rest}
    >
      {children}
    </HeadingBase>
  );
};

export { Heading };
