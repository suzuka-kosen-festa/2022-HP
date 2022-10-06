import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import { SponsorSection } from ".";

type T = typeof SponsorSection;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  children: "今年の高専祭は3年ぶりの開催。\n以下の企業様が鈴鹿高専祭を応援してくれています！",
  sponsors: ["株式会社xx"],
  title: "協賛企業",
};

export default {
  args,
  argTypes: {
    children: {
      description: "Value of main sentence in section",
      control: {
        type: "text",
      },
    },
    sponsors: {
      description: "Sponsors list",
      control: {
        type: "array",
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
