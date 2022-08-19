import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { AboutSection } from ".";

type T = typeof AboutSection;
type Story = ComponentStoryObj<T>;

const data = {
  children: `鈴鹿高専については本稿ホームページをご覧ください。`,
  link: "#",
  text: "鈴鹿高専ホームページ",
  title: "鈴鹿高専について",
};

export default {
  args: { children: data.children, link: data.link, text: data.text, title: data.title },
  component: AboutSection,
} as ComponentMeta<T>;

export const Default: Story = {};
