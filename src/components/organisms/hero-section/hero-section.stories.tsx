import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import { HeroSection } from ".";

type T = typeof HeroSection;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  date: "2022.10.30-31",
  title: "第57回鈴鹿高専祭",
};

export default {
  args,
  argTypes: {
    date: { description: "Date of festival", control: { type: "text" } },
    title: { description: "Title of festival", control: { type: "text" } },
  },
  component: HeroSection,
} as Meta;

export const Default: Story = {};
