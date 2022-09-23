import type { CSSInterpolation } from "@emotion/serialize";

export type ButtonProperties<T extends AnyComponent> = React.PropsWithChildren<
  PropertiesOf<T> & {
    boxStyles?: CSSInterpolation;
    textStyles?: CSSInterpolation;
    ref?: never;
    as?: T;
  }
>;
