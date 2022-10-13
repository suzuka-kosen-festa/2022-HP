import type { ComponentProps, ReactHTML } from "react";

export type MapSectionProperties = ComponentProps<ReactHTML["section"]> & {
  attention: string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  center: google.maps.LatLngLiteral;
  zoom: number;
  title: string;
  label: string;
  info: string;
  subtitle: string;
};
