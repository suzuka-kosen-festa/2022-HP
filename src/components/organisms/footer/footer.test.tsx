import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./footer.stories";

const { Default } = composeStories(stories);

describe("(components) organisms/footer", () => {
  test("default footer should be organisms", () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganisms();
  });
  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
  test("to be [role=footer]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("footer")).toBeInTheDocument();
  });
});
