import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./text.stories";

const { Default } = composeStories(stories);

describe("(components) atoms/text", () => {
  test("to be atoms", () => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const asserts = (container: HTMLElement) => {
      expect(container).toBeAtom();
      expect(container).not.toBeMolecule();
      expect(container).not.toBeOrganism();
      expect(container).not.toBeTemplate();
    };
    const { container } = render(<Default />);
    asserts(container);
  });
  test("snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
