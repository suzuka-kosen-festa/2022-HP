import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "./map.stories";

const { Default } = composeStories(stories);

const figureoptions = {
  name: ""
}

const documentoptions = {
  name: "鈴鹿工業高等専門学校の地図"
}

describe("(components) molecules/map", () => {
  test("to be molecules", () => {
    const { container } = render(<Default />);
    expect(container).toBeMolecule();
  });
  test("to be [role=figure]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("figure", figureoptions))
  })
  test("to be [role=document]", () => {
    const { getByRole } = render(<Default />)
    expect(getByRole("document", documentoptions))
  })
  test("take snap shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
