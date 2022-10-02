import type { ComponentProps, ReactHTML } from "react";

export type ContactSectionProperties = Omit<ComponentProps<ReactHTML["section"]>, "children"> & {
  buttonText: string;
  title: string;
  link: string;
  children: string;
};
