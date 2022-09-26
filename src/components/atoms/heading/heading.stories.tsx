import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Heading } from ".";

type T = typeof Heading;
type Story = ComponentStoryObj<T>;

const data = {
  sentence: "This is test",
};

export default {
  args: { children: data.sentence },
  argTypes: {
    children: { description: "Context of heading", control: { type: "text" } },
    color: {
      description: "First letter color",
      control: { type: "select", options: ["yellow", "green", "blue", "purple", "red"] },
    },
  },
  component: Heading,
} as ComponentMeta<T>;

export const Default: Story = {};
export const Green: Story = {
  args: {
    color: "green",
  },
};
export const Blue: Story = {
  args: {
    color: "blue",
  },
};
export const Purple: Story = {
  args: {
    color: "purple",
  },
};
export const Red: Story = {
  args: {
    color: "red",
  },
};
