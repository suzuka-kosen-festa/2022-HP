import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import { AboutSection } from ".";

type T = typeof AboutSection;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  buttonText: "鈴鹿高専ホームページ",
  children: `鈴鹿高専については本校ホームページをご覧ください。`,
  link: "#",
  title: "NIT,Suzuka College",
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
      description: "Href for button in section",
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
  component: AboutSection,
} as Meta;

export const Default: Story = {};
