import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./button.stories";

const { Default, LinkButton } = composeStories(stories)

const options = { name: "This is test"}

describe("(components) atoms/button", () => {
  test("default button should be atom", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  })
  test("to be [role=button]", () => {
    const { getByRole } = render(<Default />)
    expect(getByRole("button", options)).toBeInTheDocument()
  })
  test("tobe [role=link]", () => {
    const { getByRole } = render(<LinkButton />)
    expect(getByRole("link", options)).toBeInTheDocument()
  })
  test("take default button's snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
  test("take link button's snap shot", () => {
    const { container } = render(<LinkButton />);
    expect(container).toMatchSnapshot();
  });
})