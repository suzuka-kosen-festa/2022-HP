import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { AboutSection } from ".";

type T = typeof AboutSection;
type Story = ComponentStoryObj<T>;

const data = {
  buttonText: "鈴鹿高専ホームページ",
  children: `鈴鹿高専については本校ホームページをご覧ください。`,
  link: "#",
  title: "鈴鹿高専について",
};

export default {
  args: { buttonText: data.buttonText, children: data.children, link: data.link, title: data.title },
  component: AboutSection,
} as ComponentMeta<T>;

export const Default: Story = {};
