import type { ComponentProps, ReactHTML, ReactNode } from "react";

export type LayoutProperties = ComponentProps<ReactHTML["div"]> & {
  children: ReactNode;
};
