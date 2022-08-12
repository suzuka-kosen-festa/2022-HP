import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { AnchorText } from ".";

type T = typeof AnchorText;
type Story = ComponentStoryObj<T>;

const data = {
  link: "#",
  role: "link",
  sentence: "This is test",
};

export default {
  args: { children: data.sentence, href: data.link, role: data.role },
  component: AnchorText,
} as ComponentMeta<T>;

export const Default: Story = {};
