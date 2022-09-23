import type { ComponentProps, ReactHTML } from "react";

export type ColorVariant = "yellow" | "green" | "blue" | "purple" | "red";

export type HeadingProperties = ComponentProps<ReactHTML["h1"]> & {
  color?: ColorVariant;
};
