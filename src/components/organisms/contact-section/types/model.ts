import type { ComponentProps, ReactHTML } from "react";

export type ContactSectionProperties = ComponentProps<ReactHTML["section"]> & {
  buttonText: string;
  title: string;
  link: string;
  children: string;
};
