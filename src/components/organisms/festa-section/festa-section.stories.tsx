import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { FestaSection } from ".";

type T = typeof FestaSection;
type Story = ComponentStoryObj<T>;

const data = {
  children:
    "第57回鈴鹿高専祭、テーマは「Re:ROAD」\n今回のテーマ「Re:ROAD」には「道（Road）」を創り直す（Re）という意味と、「弾をこめる・再補填する（Reload）」という意味を使い、「今年の準備をする」「来年以降、これから先のための高専祭を行う」という想いが込められています。\n\n2019年を最後に鈴鹿高専祭は行われていません。\nそのため過去のデータもあまり残っておらず本当に1から、いや0からのスタートです。\nまだ何色にも色づいていない第57回鈴鹿高専祭を今から色づけていきます。",
  title: "今年のテーマ「Re:ROAD」について",
};

export default { args: { children: data.children, title: data.title }, component: FestaSection } as ComponentMeta<T>;

export const Default: Story = {};
