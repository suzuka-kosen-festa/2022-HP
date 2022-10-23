import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { BazaarCard } from ".";

type T = typeof BazaarCard;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  name: "A.作品展示",
  description: "美術部員が描き溜めてきた作品たちを展示します。ぜひ見に来てね！",
  image: "https://panproduct.com/blog/wp-content/uploads/2021/07/32.png",
  prices: ["無料"],
  group: "美術部",
};

export default {
  args,
  argTypes: {
    name: {
      description: "Title of bazaar",
      control: {
        type: "text",
      },
    },
    description: {
      description: "Description of bazaar",
      control: {
        type: "text",
      },
    },
    image: {
      description: "Image of bazaar",
      control: {
        type: "text",
      },
    },
    prices: {
      description: "Prices of bazaar",
      control: {
        type: "array",
      },
    },
    group: {
      description: "Place of bazaar",
      control: {
        type: "text",
      },
    },
  },
  component: BazaarCard,
} as Meta;

export const Default: Story = {};
