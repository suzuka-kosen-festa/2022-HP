import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Footer } from ".";

type T = typeof Footer;
type Story = ComponentStoryObj<T>;

const data = {
  link: "#",
  sentence: "This is test",
};

export default { args: { children: data.sentence, link: data.link }, component: Footer } as ComponentMeta<T>;

export const Default: Story = {};
