import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Button } from ".";

type T = typeof Button;
type Story = ComponentStoryObj<T>;

const data = {
  sentence: "test",
};

export default { args: { children: data.sentence }, component: Button } as ComponentMeta<T>;

export const Default: Story = {};

export const AnchorButton: Story = {
  args: {
    as: "a",
    href: "#",
    role: "button",
  },
};
