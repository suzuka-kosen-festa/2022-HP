import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Heading } from ".";

type T = typeof Heading;
type Story = ComponentStoryObj<T>;

const data = {
  sentence: "This is test",
};

export default { args: { children: data.sentence }, component: Heading } as ComponentMeta<T>;

export const Default: Story = {};
