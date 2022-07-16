import { TEST } from "../models/constant";
import type { _Test } from "../models/type";
import { readYaml, getDataByField } from "./api";

describe("API test", () => {
  it("(utils)read yaml", () => {
    const result = readYaml<_Test>("_test");
    expect(result).toStrictEqual({
      data: [
        {
          id: 1,
          name: "Hoge",
        },
        {
          id: 2,
          name: "Fuga",
        },
      ],
      field: "_test",
    });
  });
  it("(utils) get data from field", () => {
    const result1 = getDataByField<_Test>([{ __typename: TEST, name: "_test" }]);
    expect(result1).toStrictEqual([
      {
        data: [
          {
            id: 1,
            name: "Hoge",
          },
          {
            id: 2,
            name: "Fuga",
          },
        ],
        field: "_test",
      },
    ]);
  });
});
