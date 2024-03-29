import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./access-section.stories";

const { Default } = composeStories(stories);

const regionoptions = {
  name: "鈴鹿高専へのアクセス",
};

const documentoptions = {
  name: "鈴鹿工業高等専門学校の地図",
};

describe("(components) organisms/access-section", () => {
  test("to be organisms", () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganism();
  });
  test("to be [role=document]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("document", documentoptions));
  });
  test("to be [role=region]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("region", regionoptions));
  });
  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
