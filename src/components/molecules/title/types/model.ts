import type { ComponentProps, ReactHTML } from "react";
import type { ColorVariant } from "../../../../styles/type/model";

export type TitleProperties = ComponentProps<ReactHTML["div"]> & {
  children: string;
  colorKey: ColorVariant;
};
