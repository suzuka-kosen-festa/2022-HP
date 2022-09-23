import type { ComponentProps, ReactHTML } from "react";

export type FooterProperties = ComponentProps<ReactHTML["footer"]> & {
  link: string;
  children: string;
};
