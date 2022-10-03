import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import tw from "twin.macro";
import Icon from ".";

type T = typeof Icon;
type Story = ComponentStoryObj<T>;

const data = {
  icon: "ant-design:warning-filled",
  iconStyles: tw`text-caution`,
};

export default {
  args: { icon: data.icon, iconStyles: data.iconStyles },
  argTypes: {
    icon: {
      description: "Icon key for iconify",
      control: {
        type: "text",
      },
    },
    iconStyles: {
      description: "Icon style",
      control: {
        type: "object",
      },
    },
    as: {
      description: "As properties for component",
      control: {
        type: "text"
      }
    },
    css: {
      description: "Icon box style",
      control: {
        type: "object",
      },
    },
  },
  component: Icon,
} as ComponentMeta<T>;

export const Default: Story = {};
