import type { CSSInterpolation } from "@emotion/serialize";

export type LinkData = {
  color: CSSInterpolation;
  link: string;
  name: string;
};

export type HamburgerMenuItemProperties = {
  children: string;
  link: string;
  color: CSSInterpolation;
};

export type HamburgerMenuProperties = {
  menuLinks: ReadonlyArray<LinkData>;
};
