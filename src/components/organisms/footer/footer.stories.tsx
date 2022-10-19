import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import { Footer } from ".";

type T = typeof Footer;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  link: "#",
  children: "This is test",
};

export default {
  args,
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
} as Meta;

export const Default: Story = {};
