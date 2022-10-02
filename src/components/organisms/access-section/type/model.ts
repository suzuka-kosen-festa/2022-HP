import type { ComponentProps, ReactHTML } from "react";

export type MapSectionProperties = Omit<ComponentProps<ReactHTML["section"]>, "children"> & {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  center: google.maps.LatLngLiteral;
  zoom: number;
  title: string;
  label: string;
  children: string;
};
