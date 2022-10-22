import type { ComponentProps, ReactHTML } from "react";

export type HeroSectionProperties = ComponentProps<ReactHTML["section"]> & {
  date: string;
  title: string;
};
