import type { ComponentProps, ReactHTML } from "react";

export type SnsSectionProperties = Omit<ComponentProps<ReactHTML["section"]>, "children"> & {
  title: string;
};
