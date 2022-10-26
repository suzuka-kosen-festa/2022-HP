import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./time-table.stories";

const { Default } = composeStories(stories);

const options = {
  name: "Time table",
};

describe("(components) templates/time-table", () => {
  beforeAll(() => {
    const portalRoot = document.createElement("div");
    portalRoot.setAttribute("id", "modal");
    document.body.appendChild(portalRoot);
  });
  test("to be templates", () => {
    const { container } = render(<Default />);
    expect(container).toBeTemplate();
  });
  test("to be [role=main]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("main", options)).toBeInTheDocument();
  });
  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
