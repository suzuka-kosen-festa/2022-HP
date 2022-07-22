import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import tw from "twin.macro";
import { Text } from ".";

type T = typeof Text;
type Story = ComponentStoryObj<T>;

const data = {
  sentence: "This is test",
  style: tw`text-xs`,
};

export default { args: { children: data.sentence, css: data.style }, component: Text } as ComponentMeta<T>;

export const Default: Story = {};
