import type { CSSInterpolation } from "@emotion/serialize";
import type { PropsWithChildren } from "react";
import type { ColorVariant } from "../../../../styles/type/model";

export type ButtonProperties<T extends AnyComponent> = PropsWithChildren<
  PropertiesOf<T> & {
    boxStyles?: CSSInterpolation;
    textStyles?: CSSInterpolation;
    colorKey: ColorVariant;
    ref?: never;
    as?: T;
  }
>;
