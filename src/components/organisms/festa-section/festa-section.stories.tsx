import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import { FestaSection } from ".";

type T = typeof FestaSection;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  children:
    "第57回鈴鹿高専祭、テーマは「Re:ROAD」\n今回のテーマ「Re:ROAD」には「道（Road）」を創り直す（Re）という意味と、「弾をこめる・再補填する（Reload）」という意味を使い、「今年の準備をする」「来年以降、これから先のための高専祭を行う」という想いが込められています。\n\n2019年を最後に鈴鹿高専祭は行われていません。\nそのため過去のデータもあまり残っておらず本当に1から、いや0からのスタートです。\nまだ何色にも色づいていない第57回鈴鹿高専祭を今から色づけていきます。",
  subtitle: "今年のテーマ「Re:ROAD」について",
  title: "About",
};

export default {
  args,
  argTypes: {
    children: { description: "Value of main sentence in section", control: { type: "text" } },
    title: { description: "Title of section", control: { type: "text" } },
    subtitle: { description: "Sub title of section", control: { type: "text" } },
  },
  component: FestaSection,
} as Meta;

export const Default: Story = {};
