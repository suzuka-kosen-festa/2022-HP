import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import { ContactSection } from ".";

type T = typeof ContactSection;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  buttonText: "お問い合わせ",
  children: "第57回鈴鹿高専祭に関するお問い合わせは下のボタンからお願いいたします。(google formsが開きます)",
  link: "#",
  title: "Contact us",
};

export default {
  args,
  argTypes: {
    buttonText: {
      description: "The text for button in section",
      control: {
        type: "text",
      },
    },
    children: {
      description: "Value of main sentence in section",
      control: {
        type: "text",
      },
    },
    link: {
      description: "Href to GoogleForms",
      control: {
        type: "text",
      },
    },
    title: {
      description: "Title of section",
      control: {
        type: "text",
      },
    },
  },
  component: ContactSection,
} as Meta;

export const Default: Story = {};
