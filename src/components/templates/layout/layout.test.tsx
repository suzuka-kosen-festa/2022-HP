import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./layout.stories";

const { Default } = composeStories(stories);

describe("(components) templates/layout", () => {
  test("to be templates", () => {
    const { container } = render(<Default />);
    expect(container).toBeTemplate();
  });
  test("snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
})
