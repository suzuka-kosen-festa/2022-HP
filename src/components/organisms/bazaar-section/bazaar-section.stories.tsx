import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from 'react';
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
  attentionTitle: "Bazaar",
  buttonText: "バザーの詳細を見る",
  description: "飲食団体は18団体、その他レクリエーションには17団体が出店しています！屋台・レク等のバザー詳細についてはこちらをクリック！",
  title: "Bazaar"
};

export default {
  args,
  argTypes: {},
  component: BazaarSection,
} as Meta;

export const Default: Story = {};
