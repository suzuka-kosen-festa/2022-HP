import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "yaml";
import type { Field, RField, RYaml } from "../../models/type";

const getAssetsDirectory = () => join(process.cwd(), "assets");

export const readYaml = <T extends RField>(path: string): RYaml<T> => {
  const fullpath = join(getAssetsDirectory(), `${path}.yaml`);
  const raw = readFileSync(fullpath, "utf8");
  const result = parse<T>(raw);
  return {
    data: result,
    field: path,
  };
};

export const getDataByField = <T extends RField>(fields: Array<Field<T>>): Array<RYaml<T>> =>
  fields.map(field => readYaml<typeof field.__typename>(field.name));
