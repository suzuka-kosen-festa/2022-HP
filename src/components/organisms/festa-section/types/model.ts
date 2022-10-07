import type { ComponentProps, ReactHTML } from "react";

export type FestaSectionProperties = ComponentProps<ReactHTML["section"]> & {
  title: string;
  subtitle: string;
  children: string;
};
