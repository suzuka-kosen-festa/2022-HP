import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./about-section.stories";

const { Default } = composeStories(stories);

const options = {
  name: "鈴鹿高専について",
};

describe("(components) organisms/about-section", () => {
  test("to be organisms", () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganism();
  });
  test("to be [role=region]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("region", options));
  });
  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
