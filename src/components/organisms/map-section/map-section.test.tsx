import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./map-section.stories";

const { Default } = composeStories(stories);

const regionoptions = {
  name: "map",
};

const linkoptions = {
  name: "校内マップ",
};

describe("(components) organisms/map-section", () => {
  test("to be organisms", () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganism();
  });
  test("to be [role=region]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("region", regionoptions));
  });
  test("to be [role=link]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("link", linkoptions));
  });
  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
