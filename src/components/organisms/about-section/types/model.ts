import type { ComponentProps, ReactHTML } from "react";

export type AboutSectionProperties = ComponentProps<ReactHTML["section"]> & {
  buttonText: string;
  children: string;
  link: string;
  title: string;
};
