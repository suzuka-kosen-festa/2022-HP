import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./anchor-text.stories";

const { Default } = composeStories(stories);

const options = { name: "This is test" };

describe("(components) atoms/anchor-text", () => {
  test("to be atoms", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  });
  test("to be [role=link]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("link", options)).toBeInTheDocument();
  });
  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
