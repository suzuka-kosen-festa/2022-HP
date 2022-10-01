import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./sub-heading.stories";

const { Default } = composeStories(stories);

const options = {
  name: "This is test",
};

describe("(components) atoms/text", () => {
  test("to be atoms", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  });
  test("to be [role=heading]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("heading", options));
  });
  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
