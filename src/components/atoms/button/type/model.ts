import type { CSSInterpolation } from "@emotion/serialize";
import type { PropsWithChildren } from "react";

export type ButtonProperties<T extends AnyComponent> = PropsWithChildren<
  PropertiesOf<T> & {
    boxStyles?: CSSInterpolation;
    textStyles?: CSSInterpolation;
    ref?: never;
    as?: T;
  }
>;
