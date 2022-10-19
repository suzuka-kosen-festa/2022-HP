import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import { Button } from ".";

type T = typeof Button;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  children: "This is test",
  colorKey: "yellow",
};

export default {
  args,
  argTypes: {
    boxStyles: {
      description: "Button box styles",
      control: {
        type: "object",
      },
    },
    textStyles: {
      description: "Button text styles",
      control: {
        type: "object",
      },
    },
    colorKey: {
      description: "Button color",
      control: { type: "select", options: ["yellow", "green", "blue", "purple", "red"] },
    },
    as: {
      description: "As props for button",
      control: {
        type: "text",
      },
    },
  },
  component: Button,
} as Meta;

export const Default: Story = {};
export const Anchor: Story = {
  args: {
    as: "a",
    href: "#",
    role: "button",
  },
};
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
