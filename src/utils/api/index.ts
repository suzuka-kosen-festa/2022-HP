import { readFileSync } from "node:fs";
import { join } from "node:path";
import { match, P } from "ts-pattern";
import { parse } from "yaml";
import type { _Field, Fields, RYaml, RDataByField, Sponsors, Tests } from "../../models";

const getAssetsDirectory = () => join(process.cwd(), "assets");

export const readYaml = <T extends Fields>(path: string): RYaml<T> => {
  const fullpath = join(getAssetsDirectory(), `${path}.yaml`);
  const raw = readFileSync(fullpath, "utf8");
  const result = parse<T>(raw);
  return {
    data: result,
    field: path,
  };
};

export const getDataByField = (fields: Array<_Field>): RDataByField => {
  const result: RDataByField = [];
  for (const field of fields) {
    result.push(
      match(field)
        .with({ __typename: "Sponsors", path: P.select() }, path => readYaml<Sponsors>(path))
        .with({ __typename: "Tests", path: P.select() }, path => readYaml<Tests>(path))
        .exhaustive(),
    );
  }
  return result;
};
