import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { Sponsor } from ".";

type T = typeof Sponsor;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  sponsors: [
    {
      name: "株式会社 鈴鹿",
      id: 1,
    },
    {
      name: "有限会社 高専",
      id: 2,
    },
    {
      name: "〇〇クリニック",
      id: 3,
    },
  ],
};

export default {
  args,
  argTypes: {
    sponsors: {
      description: "Data list of sponsor",
      control: {
        type: "array",
      },
    },
  },
  component: Sponsor,
} as Meta;

export const Default: Story = {};
