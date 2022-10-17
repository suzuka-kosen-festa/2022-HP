import type { CSSInterpolation } from "@emotion/serialize";
import type { ComponentProps, ReactHTML } from "react";
import type { LinkData } from "../../../molecules/hamburger-menu/types/model";

export type HeaderLinkItemProperties = {
  children: string;
  link: string;
  color: CSSInterpolation;
};

export type HeaderProperties = ComponentProps<ReactHTML["header"]> & {
  headerLinks: ReadonlyArray<LinkData>;
};
