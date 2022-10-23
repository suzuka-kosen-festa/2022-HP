import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./bazaar-card.stories";

const { Default } = composeStories(stories);

describe("(components) molecules/bazaar-card", () => {
  test("to be molecules", () => {
    const { container } = render(<Default />);
    expect(container).toBeMolecule();
  });
  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
