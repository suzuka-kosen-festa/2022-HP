import type { IconProps } from "@iconify/react";
import type { CSSInterpolation } from "@emotion/serialize";

export type IconProperties = IconProps & {
  ref?: never;
  iconStyles?: CSSInterpolation;
};
