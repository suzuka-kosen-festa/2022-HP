import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import { SponsorSection } from ".";

type T = typeof SponsorSection;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  children:
    "第57回鈴鹿高専祭を開催するにあたって、多くの方にご支援賜りました。\nこちらのページにてご協賛いただいた企業様、支援いただいた個人様のお名前を記載しておりますのでぜひご覧ください。",
  buttonText: "READ MORE",
  title: "Sponsors",
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
    title: {
      description: "Title of section",
      control: {
        type: "text",
      },
    },
  },
  component: SponsorSection,
} as Meta;

export const Default: Story = {};
