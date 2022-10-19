import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./footer.stories";

const { Default } = composeStories(stories);

const footeroptions = {
  name: "",
};

const linkoptions = {
  name: "© This is test",
};

describe("(components) organisms/footer", () => {
  test("to be organisms", () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganism();
  });
  test("to be [role=contentinfo]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("contentinfo", footeroptions)).toBeInTheDocument();
  });
  test("to be [role=link]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("link", linkoptions)).toBeInTheDocument();
  });
  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
