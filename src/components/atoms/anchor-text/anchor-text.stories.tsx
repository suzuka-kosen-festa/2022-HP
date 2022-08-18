import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { AnchorText } from ".";

type T = typeof AnchorText;
type Story = ComponentStoryObj<T>;

const data = {
  link: "#",
  role: "link",
  sentence: "This is test",
  tabindex: 0,
};

export default {
  args: { children: data.sentence, href: data.link, role: data.role, tabIndex: data.tabindex },
  component: AnchorText,
} as ComponentMeta<T>;

export const Default: Story = {};
