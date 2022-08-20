import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ContactSection } from ".";

type T = typeof ContactSection;
type Story = ComponentStoryObj<T>;

const data = {
  buttonText: "お問い合わせ",
  children: "第57回鈴鹿高専祭に関するお問い合わせは下のボタンからお願いいたします。(google formsが開きます)",
  link: "#",
  title: "お問い合わせ",
};

export default {
  args: { buttonText: data.buttonText, children: data.children, link: data.link, title: data.title },
  component: ContactSection,
} as ComponentMeta<T>;

export const Default: Story = {};
