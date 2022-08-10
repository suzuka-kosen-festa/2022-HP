import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./footer.stories";

const { Default } = composeStories(stories);

describe("(components) organisms/footer", () => {
  test("to be organisms", () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganisms();
  });
  test("to be [role=organisms]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("footer")).toBeInTheDocument();
  });

  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
