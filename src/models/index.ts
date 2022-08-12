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

export type FooterProperties = React.ComponentProps<React.ReactHTML["footer"]> & {
  link: string;
  children: string;
};
