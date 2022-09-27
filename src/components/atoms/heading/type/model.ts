import type { ComponentProps, ReactHTML } from "react";
import type { ColorVariant } from "../../../../styles/type/model";

export type HeadingProperties = ComponentProps<ReactHTML["h1"]> & {
  colorKey: Omit<ColorVariant, "twitter" | "instagram">;
};
