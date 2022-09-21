import type { ComponentProps, ReactHTML } from "react";

export type FestaSectionProperties = Omit<ComponentProps<ReactHTML["section"]>, "children"> & {
  title: string;
  children: string;
};
