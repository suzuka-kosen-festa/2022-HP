import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./button.stories";

const { Default, Anchor, Blue, Green, Red, Purple, Yellow } = composeStories(stories);

const options = { name: "This is test" };

describe("(components) atoms/button", () => {
  test("default button should be atom", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  });
  test("to be [role=button]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("button", options)).toBeInTheDocument();
  });
  test("to be [role=button]", () => {
    const { getByRole } = render(<Anchor />);
    expect(getByRole("button", options)).toBeInTheDocument();
  });
  test("(default) take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
  test("(anchor) take snap shot", () => {
    const { container } = render(<Anchor />);
    expect(container).toMatchSnapshot();
  });
  test("(yellow) take snap shot", () => {
    const { container } = render(<Yellow />);
    expect(container).toMatchSnapshot();
  });
  test("(blue) take snap shot", () => {
    const { container } = render(<Blue />);
    expect(container).toMatchSnapshot();
  });
  test("(green) take snap shot", () => {
    const { container } = render(<Green />);
    expect(container).toMatchSnapshot();
  });
  test("(red) take snap shot", () => {
    const { container } = render(<Red />);
    expect(container).toMatchSnapshot();
  });
  test("(purple) take snap shot", () => {
    const { container } = render(<Purple />);
    expect(container).toMatchSnapshot();
  });
});
