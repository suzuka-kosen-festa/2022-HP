import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./top.stories";

const { Default } = composeStories(stories);

const options = {
  name: "Top page",
};

describe("(components) templates/top", () => {
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
