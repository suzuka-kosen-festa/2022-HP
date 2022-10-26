import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { NotFound } from ".";

type T = typeof NotFound;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  status: 404,
  message: "Not Found",
};

export default {
  args,
  argTypes: {
    status: {
      description: "Status code",
      control: {
        type: "number",
      },
    },
    message: {
      description: "Message of error",
      control: {
        type: "text",
      },
    },
  },
  component: NotFound,
} as Meta;

export const Default: Story = {};
