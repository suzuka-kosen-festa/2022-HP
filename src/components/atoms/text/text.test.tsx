import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./text.stories";

const { Default } = composeStories(stories)

describe("(components) atom/text", () => {
  test("snap shot", () => {
    const { container } = render(<Default />)
    expect(container).toMatchSnapshot()
  })
})
