import type { CSSInterpolation } from "@emotion/serialize";
import React from "react";
import { TEST, SPONSORS } from "./constant";

export type Field<T extends RField> = {
  __typename: T;
  name: string;
};

export type RYaml<T extends RField> = {
  data: T;
  field: string;
};

export type RField = Sponsors | _Test;

export type Sponsors = typeof SPONSORS;

export type _Test = typeof TEST;

export type ButtonProperties<T extends AnyComponent> = React.PropsWithChildren<
  PropertiesOf<T> & {
    boxStyles?: CSSInterpolation;
    textStyles?: CSSInterpolation;
    ref?: never;
    as?: T;
  }
>;
