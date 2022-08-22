import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./sponsor-section.stories";

const { Default } = composeStories(stories);

const sponsoroptions = {
  name: "協賛企業",
};

const listoptions = {
  name: "",
};
describe("(components) organisms/sponsor-section", () => {
  test("to be organisms", () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganism();
  });
  test("to be [role=region]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("region", sponsoroptions));
  });
  test("to be [role=list]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("list", listoptions));
  });
  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
