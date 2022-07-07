import type { ComponentStoryObj } from "@storybook/react";
import tw from "twin.macro";
import { Text } from "./";

type Story = ComponentStoryObj<typeof Text>;

export default { component: Text };

const data = {
  sentence: "This is test",
  style: tw`text-xs`,
};

export const Default: Story = {
  args: { children: data.sentence, css: data.style },
};
