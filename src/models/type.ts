import { TEST, SPONSORS} from "./constant";

export type Field<T extends RField> = {
  __typename: T
  name: string
}

export type RYaml<T extends RField> = {
  data: T
  field: string
}

export type RField = Sponsors | _Test

export type Sponsors = typeof SPONSORS

export type _Test = typeof TEST
