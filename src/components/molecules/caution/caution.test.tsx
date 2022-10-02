import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./caution.stories";

const { Default } = composeStories(stories);

const options = {
  name: "注意事項"
}

describe("(components) molecules/twitter", () => {
  test("to be molecules", () => {
    const { container } = render(<Default />);
    expect(container).toBeMolecule();
  });
  test("to be [role=alert]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("alert", options));
  });
  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
