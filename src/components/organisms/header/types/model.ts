import type { CSSInterpolation } from "@emotion/serialize";
import type { LinkData } from "../../../molecules/hamburger-menu/types/model";

export type HeaderLinkItemProperties = {
  children: string;
  link: string;
  color: CSSInterpolation;
};

export type HeaderProperties = {
  headerLinks: ReadonlyArray<LinkData>;
};
