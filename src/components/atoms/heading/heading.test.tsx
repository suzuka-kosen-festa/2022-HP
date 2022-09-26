import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./heading.stories";

const { Default, Blue, Green, Red, Purple } = composeStories(stories);

const options = {
  name: "This is test",
};

describe("(components) atoms/heading", () => {
  test("to be atoms", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  });
  test("to be [role=heading]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("heading", options));
  });
  test("(default) take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
  test("(blue) take snap shot", () => {
    const { container } = render(<Blue />)
    expect(container).toMatchSnapshot();
  })
  test("(green) take snap shot", () => {
    const { container } = render(<Green />)
    expect(container).toMatchSnapshot();
  })
  test("(red) take snap shot", () => {
    const { container } = render(<Red />)
    expect(container).toMatchSnapshot();
  })
  test("(purple) take snap shot", () => {
    const { container } = render(<Purple />)
    expect(container).toMatchSnapshot();
  })
});
