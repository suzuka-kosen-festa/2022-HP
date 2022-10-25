import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./member-card.stories";

const { Default } = composeStories(stories);

const options = {
  name: "",
};

describe("(components) molecules/member", () => {
  test("to be molecules", () => {
    const { container } = render(<Default />);
    expect(container).toBeMolecule();
  });
  test("to be [role=figure]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("figure", options));
  });
  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
