import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Footer } from ".";

type T = typeof Footer;
type Story = ComponentStoryObj<T>;

const data = {
  link: "#",
  sentence: "This is test",
};

export default {
  args: { children: data.sentence, link: data.link },
  argTypes: {
    children: {
      description: "The text for footer",
      control: {
        type: "text",
      },
    },
    link: {
      description: "Href to License",
      control: {
        type: "text",
      },
    },
  },
  component: Footer,
} as ComponentMeta<T>;

export const Default: Story = {};
