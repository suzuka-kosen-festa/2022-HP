import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./festa-section.stories";

const { Default } = composeStories(stories);

const options = {
  name: "今年のテーマ「Re:ROAD」について",
};

describe("(components) organisms/festa-section", () => {
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
