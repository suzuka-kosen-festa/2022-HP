import type { IconProps } from "@iconify/react";
import type { CSSInterpolation } from "@emotion/serialize";
import type {ComponentType} from "react";

export type IconProperties = IconProps & {
  ref?: never;
  as?: string | ComponentType;
  iconStyles?: CSSInterpolation;
};
