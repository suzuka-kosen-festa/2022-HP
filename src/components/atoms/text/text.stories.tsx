import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Text } from ".";

type T = typeof Text;
type Story = ComponentStoryObj<T>;

const data = {
  sentence: "This is test",
};

export default {
  args: { children: data.sentence },
  argTypes: {
    children: {
      description: "Context of text",
      control: {
        type: "text",
      },
    },
  },
  component: Text,
} as ComponentMeta<T>;

export const Default: Story = {};
