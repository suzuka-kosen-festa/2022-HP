import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./sponsor.stories";

const { Default } = composeStories(stories);

const options = {
  name: "Sponsor page",
};

describe("(components) templates/sponsor", () => {
  test("to be templates", () => {
    const { container } = render(<Default />);
    expect(container).toBeTemplate();
  });
  test("to be [role=main]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("main", options)).toBeInTheDocument();
  });
  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
