import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./time-table-row.stories";

const { Default } = composeStories(stories);

describe("(components) molecules/time-table-row", () => {
  beforeAll(() => {
    const portalRoot = document.createElement("div");
    portalRoot.setAttribute("id", "modal");
    document.body.appendChild(portalRoot);
  });
  test("to be molecules", () => {
    const { container } = render(<Default />);
    expect(container).toBeMolecule();
  });
  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
