import type { ComponentProps, ReactHTML } from "react";
import type { Sponsors } from ".";

export type SponsorSectionProperties = Omit<ComponentProps<ReactHTML["section"]>, "children"> & {
  title: string;
  children: string;
  sponsors: Sponsors;
};
