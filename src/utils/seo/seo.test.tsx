import "@testing-library/jest-dom";
import "../../tests/mocks/head.mock";
import { render } from "@testing-library/react";
import { Seo } from ".";

describe("(utils) Seo test", () => {
  test("take snap shot", () => {
    render(
      <Seo
        title={"Re:ROAD | 第57回鈴鹿高専祭"}
        description={"まだ何色にも色づいていない第57回鈴鹿高専祭を今から色づけていきます。"}
      />,
    );
    expect(document.head).toMatchSnapshot();
  });
});
