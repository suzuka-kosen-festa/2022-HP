import type { ParseOptions, DocumentOptions, SchemaOptions, ToJSOptions } from "yaml";
import type { Reviver } from "yaml/dist/doc/applyReviver";
import type { RField } from "../models/type";

declare module "yaml" {
  // eslint-disable-next-line unicorn/prevent-abbreviations
  function parse<T extends RField>(
    src: string,
    options?: ParseOptions & DocumentOptions & SchemaOptions & ToJSOptions,
  ): T;
  function parse<T extends RField>(
    // eslint-disable-next-line unicorn/prevent-abbreviations
    src: string,
    reviver: Reviver,
    options?: ParseOptions & DocumentOptions & SchemaOptions & ToJSOptions,
  ): T;
}
