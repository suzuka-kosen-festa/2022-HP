import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { SponsorSection } from ".";

type T = typeof SponsorSection;
type Story = ComponentStoryObj<T>;

const data = {
  children: "今年の高専祭は3年ぶりの開催。\n以下の企業様が鈴鹿高専祭を応援してくれています！",
  sponsors: "・株式会社xx\n・...",
  title: "協賛企業",
};

export default {
  args: { children: data.children, sponsors: data.sponsors, title: data.title },
  component: SponsorSection,
} as ComponentMeta<T>;

export const Default: Story = {};
