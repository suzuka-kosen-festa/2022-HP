import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Text } from ".";

type T = typeof Text;
type Story = ComponentStoryObj<T>;

const data = {
  sentence: "test",
};

export default { args: { children: data.sentence }, component: Text } as ComponentMeta<T>;

export const Default: Story = {};
