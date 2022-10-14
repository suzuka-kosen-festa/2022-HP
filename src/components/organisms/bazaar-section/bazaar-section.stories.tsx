import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { BazaarSection } from ".";

type T = typeof BazaarSection;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  attentions: [
    "学内における飲食物の食べ歩きはご遠慮ください。",
    "学内バザーにて購入した飲食物のお持ち帰りはご遠慮ください",
    "各出店バザーにお並びいただく際、1つの出店につきお並びいただく人数は5人までとしておりますので、当日は係員の指示に従ってください。",
  ],
  attentionTitle: "バザーに関するお願い",
  buttonText: "バザーの詳細を見る",
  description:
    "飲食団体は18団体、その他レクリエーションには17団体が出店しています！屋台・レク等のバザー詳細についてはこちらをクリック！",
  title: "Bazaar",
};

export default {
  args,
  argTypes: {
    attentions: {
      description: "Array of attentions",
      control: {
        type: "array",
      },
    },
    attentionTitle: {
      description: "Title of attention",
      control: {
        type: "text",
      },
    },
    buttonText: {
      description: "Button text",
      control: {
        type: "text",
      },
    },
    description: {
      description: "Description of section",
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
  component: BazaarSection,
} as Meta;

export const Default: Story = {};
