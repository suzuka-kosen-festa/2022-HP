import type { ComponentProps, ReactHTML } from "react";

export type MapProperties = Omit<ComponentProps<ReactHTML["iframe"]>, "children"> & {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  center: google.maps.LatLngLiteral;
  title: string;
  zoom: number;
};
