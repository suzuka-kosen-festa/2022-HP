import type { IconifyIcon } from "@iconify/react";
import type { CSSInterpolation } from "@emotion/serialize";
import type { PropsWithoutRef } from "react";

export type IconProperties<T extends AnyComponent> = PropsWithoutRef<
  PropertiesOf<T> & {
    icon: string | IconifyIcon;
    ref?: never;
    as?: T;
    iconStyles?: CSSInterpolation;
  }
>;
