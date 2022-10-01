import type { ComponentProps, ReactHTML } from "react";

export type AboutSectionProperties = Omit<ComponentProps<ReactHTML["section"]>, "children"> & {
  buttonText: string;
  children: string;
  link: string;
  title: string;
};
