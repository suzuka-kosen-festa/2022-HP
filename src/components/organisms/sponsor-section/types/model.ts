import type { ComponentProps, ReactHTML } from "react";

export type SponsorSectionProperties = ComponentProps<ReactHTML["section"]> & {
  title: string;
  children: string;
  buttonText: string;
};
