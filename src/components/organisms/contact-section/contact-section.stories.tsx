import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ContactSection } from ".";

type T = typeof ContactSection;
type Story = ComponentStoryObj<T>;

const data = {
  buttonText: "お問い合わせ",
  children: "第57回鈴鹿高専祭に関するお問い合わせは下のボタンからお願いいたします。(google formsが開きます)",
  link: "#",
  title: "Contact us",
};

export default {
  args: { buttonText: data.buttonText, children: data.children, link: data.link, title: data.title },
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
} as ComponentMeta<T>;

export const Default: Story = {};
