import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import { AnchorText } from ".";

type T = typeof AnchorText;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  href: "#",
  children: "This is test",
  tabIndex: 0,
};

export default {
  args,
  argTypes: {
    children: {
      description: "Context of anchor",
      control: {
        type: "text",
      },
    },
    href: {
      description: "Link of anchor",
      control: {
        type: "text",
      },
    },
  },
  component: AnchorText,
} as Meta;

export const Default: Story = {};
