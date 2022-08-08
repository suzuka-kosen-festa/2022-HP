import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Button } from ".";

type T = typeof Button;
type Story = ComponentStoryObj<T>

const data = {
  sentence: "This is test",
};

export default { args: { children: data.sentence }, component: Button, title: "Button" } as ComponentMeta<T>;

export const Default: Story = {};

export const LinkButton: Story = {
  args: {
    as: "a",
    role: "link"
  }
}
