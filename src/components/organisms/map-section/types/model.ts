import type {ComponentProps, ReactHTML} from "react";

export type MapSectionProperties = ComponentProps<ReactHTML["section"]> & {
  title: string;
};
