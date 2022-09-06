import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { HeroSection } from ".";

type T = typeof HeroSection;
type Story = ComponentStoryObj<T>;

const data = {
  date: "2022.10.30-31",
  title: "第57回鈴鹿高専祭",
};

export default { args: { date: data.date, title: data.title }, component: HeroSection } as ComponentMeta<T>;

export const Default: Story = {};
