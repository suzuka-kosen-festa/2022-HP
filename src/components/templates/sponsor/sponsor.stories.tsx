import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from 'react';
import { Sponsor } from ".";

type T = typeof Sponsor;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  sponsors: [
    "株式会社 鈴鹿",
    "有限会社 高専",
    "〇〇クリニック"
  ]
};

export default {
  args,
  argTypes: {
    sponsors: {
      description: "Data list of sponsor",
      control: {
        type: "array"
      }
    }
  },
  component: Sponsor,
} as Meta;

export const Default: Story = {};
