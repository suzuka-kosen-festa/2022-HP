import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./contact-section.stories";

const { Default } = composeStories(stories);

const regionoptions = {
  name: "お問い合わせ",
};

const buttonoptions = {
  name: "お問い合わせ",
};

describe("(components) organisms/contact-section", () => {
  test("to be organisms", () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganism();
  });
  test("to be [role=region]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("region", regionoptions)).toBeInTheDocument();
  });

  test("to be [role=button]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("button", buttonoptions)).toBeInTheDocument();
  });

  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
