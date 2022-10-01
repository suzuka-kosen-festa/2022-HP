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
    colorKey: {
      description: "First letter color",
      control: { type: "select", options: ["yellow", "green", "blue", "purple", "red"] },
    },
  },
  component: Heading,
} as ComponentMeta<T>;

export const Default: Story = {};
export const Yellow: Story = {
  args: {
    colorKey: "yellow",
  },
};
export const Green: Story = {
  args: {
    colorKey: "green",
  },
};
export const Blue: Story = {
  args: {
    colorKey: "blue",
  },
};
export const Purple: Story = {
  args: {
    colorKey: "purple",
  },
};
export const Red: Story = {
  args: {
    colorKey: "red",
  },
};
