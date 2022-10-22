import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from 'react';
import { Switching } from "./index";

type T = typeof Switching;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  buttonData: [
    {
      buttonText: "10.30",
      query: "30"
    },
    {
      buttonText: "10.31",
      query: "31"
    }
  ],
  color: "yellow"
};

export default {
  args,
  argTypes: {
    buttonData: {
      description: "Data of button",
      control: {
        type: "array"
      }
    },
    color: {
      description: "Color of button",
      control: {
        type: "select",
        options: ["yellow", "green"]
      }
    }
  },
  component: Switching,
} as Meta;

export const Default: Story = {};
export const Yellow: Story = {
  args: {
    color: "yellow"
  }
}
export const Green: Story = {
  args: {
    color: "green"
  }
}
