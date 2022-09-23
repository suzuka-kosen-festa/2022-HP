import type { ComponentProps, ReactHTML } from "react";
import type { MapProperties } from ".";

export type MapSectionProperties = Omit<ComponentProps<ReactHTML["section"]>, "children"> &
  Omit<MapProperties, "title" | "children"> & {
    title: string;
    label: string;
    children: string;
  };
