import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import { Text } from ".";

type T = typeof Text;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  children: "This is test",
};

export default {
  args,
  argTypes: {
    children: {
      description: "Context of text",
      control: {
        type: "text",
      },
    },
  },
  component: Text,
} as Meta;

export const Default: Story = {};
