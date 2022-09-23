import type { ComponentProps, ReactHTML } from "react";

export type HeroSectionProperties = Omit<ComponentProps<ReactHTML["header"]>, "children"> & {
  date: string;
  title: string;
};
