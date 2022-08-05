import type { Tests } from "../../models/type";
import { readYaml, getDataByField } from ".";

describe("(utils)API test", () => {
  test("to return data in _test.yaml", () => {
    const result = readYaml<Tests>("_test");
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
  test("to return data from field", () => {
    const result1 = getDataByField([{ __typename: "Tests", path: "_test" }]);
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
