import { render } from "@testing-library/react";
import { Text } from ".";

it("(components) Text snap shot", () => {
  const tree = render(<Text>Test</Text>);
  expect(tree).toMatchSnapshot();
});
