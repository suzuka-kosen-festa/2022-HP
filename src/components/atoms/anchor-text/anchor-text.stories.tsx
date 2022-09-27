import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { AnchorText } from ".";

type T = typeof AnchorText;
type Story = ComponentStoryObj<T>;

const data = {
  link: "#",
  sentence: "This is test",
  tabindex: 0,
};

export default {
  args: { children: data.sentence, href: data.link, tabIndex: data.tabindex },
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
} as ComponentMeta<T>;

export const Default: Story = {};
