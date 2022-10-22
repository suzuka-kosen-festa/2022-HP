---
to: <%= abs_path %>/<%= component_name %>.test.tsx
---
import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./<%= component_name %>.stories";

const { Default } = composeStories(stories);

describe("(components) <%= category %>/<%= component_name %>", () => {
  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
