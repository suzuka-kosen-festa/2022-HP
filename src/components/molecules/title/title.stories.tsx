import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { Title } from "./index";

type T = typeof Title;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  children: "This is test",
  colorKey: "yellow",
};

export default {
  args,
  argTypes: {
    children: {
      description: "Title context",
      control: {
        type: "text",
      },
    },
    colorKey: {
      description: "Back ink color",
      control: { type: "select", options: ["yellow", "green", "blue", "purple", "red"] },
    },
  },
  component: Title,
} as Meta;

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
