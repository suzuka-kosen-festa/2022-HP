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
