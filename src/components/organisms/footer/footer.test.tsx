import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./footer.stories";

const { Default } = composeStories(stories);

describe("(components) atoms/footer", () => {
  test("to be atoms", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  });
  test("to be [role=contentinfo]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("contentinfo")).toBeInTheDocument();
  });

  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
