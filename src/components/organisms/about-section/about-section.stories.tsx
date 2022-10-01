import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { AboutSection } from ".";

type T = typeof AboutSection;
type Story = ComponentStoryObj<T>;

const data = {
  buttonText: "鈴鹿高専ホームページ",
  children: `鈴鹿高専については本校ホームページをご覧ください。`,
  link: "#",
  title: "NIT,Suzuka College",
};

export default {
  args: { buttonText: data.buttonText, children: data.children, link: data.link, title: data.title },
  argTypes: {
    buttonText: {
      description: "The text for button in section",
      control: {
        type: "text",
      }
    },
    children: {
      description: "Value of main sentence in section",
      control: {
        type: "text"
      }
    },
    link: {
      description: "Href for button in section",
      control: {
        type: "text"
      }
    },
    title: {
      description: "Title of section",
      control: {
        type: "text"
      }
    }
  },
  component: AboutSection,
} as ComponentMeta<T>;

export const Default: Story = {};
