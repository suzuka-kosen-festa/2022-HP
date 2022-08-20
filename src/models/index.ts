import type { CSSInterpolation } from "@emotion/serialize";
import React from "react";

export type _Field = {
  __typename: FieldsKey;
  path: string;
};

export type RYaml<T extends Fields> = {
  data: T;
  field: string;
};

export type RDataByField = Array<RYaml<Sponsors> | RYaml<Tests>>;

export type Fields = Sponsors | Tests;

export type FieldsKey = "Sponsors" | "Tests";

export type Sponsors = Array<string>;

type _Test = {
  id: number;
  name: string;
};

export type Tests = Array<_Test>;

export type ButtonProperties<T extends AnyComponent> = React.PropsWithChildren<
  PropertiesOf<T> & {
    boxStyles?: CSSInterpolation;
    textStyles?: CSSInterpolation;
    ref?: never;
    as?: T;
  }
>;

export type LayoutProperties = React.ComponentProps<React.ReactHTML["div"]> & {
  children: React.ReactNode;
};

export type SeoProperties = {
  title: string;
  description: string;
  pageRelPath?: string;
};

export type FooterProperties = React.ComponentProps<React.ReactHTML["footer"]> & {
  link: string;
  children: string;
};

export type MapProperties = Omit<React.ComponentProps<React.ReactHTML["iframe"]>, "children"> & {
  center: google.maps.LatLngLiteral;
  title: string;
  zoom: number;
};

export type MapSectionProperties = Omit<React.ComponentProps<React.ReactHTML["section"]>, "children"> &
  Omit<MapProperties, "title" | "children"> & {
    title: string;
    label: string;
    children: string;
  };

export type HeroSectionProperties = Omit<React.ComponentProps<React.ReactHTML["section"]>, "children"> & {
  date: string;
  title: string;
};

export type FestaSectionProperties = Omit<React.ComponentProps<React.ReactHTML["section"]>, "children"> & {
  title: string;
  children: string;
};

export type ContactSectionProperties = Omit<React.ComponentProps<React.ReactHTML["section"]>, "children"> & {
  buttonText: string;
  title: string;
  link: string;
  children: string;
};
