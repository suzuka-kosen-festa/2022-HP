import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { SubHeading } from ".";

type T = typeof SubHeading;
type Story = ComponentStoryObj<T>;

const data = {
  sentence: "This is test",
};

export default {
  args: {children: data.sentence},
  argTypes: {
    children: {description: "Context of sub heading", control: {type: "text"}},
  },
  component: SubHeading,
} as ComponentMeta<T>

export const Default: Story = {}
