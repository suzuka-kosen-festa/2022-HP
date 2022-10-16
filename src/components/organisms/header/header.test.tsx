import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./header.stories";

const { Default } = composeStories(stories);

const banneroptions = {
  name: "",
};

const imgoptions = {
  name: "第57回鈴鹿高専祭、Re:ROADのロゴ",
};

describe("(components) organisms/header", () => {
  test("to be organisms", () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganism();
  });
  test("to be [role=banner]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("banner", banneroptions)).toBeInTheDocument();
  });
  test("to be [role=img]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("img", imgoptions)).toBeInTheDocument();
  });
  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
