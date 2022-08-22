import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { SnsSection } from ".";

type T = typeof SnsSection;
type Story = ComponentStoryObj<T>;

const data = {
  title: "SNS",
};

export default { args: { title: data.title }, component: SnsSection } as ComponentMeta<T>;

export const Default: Story = {};
