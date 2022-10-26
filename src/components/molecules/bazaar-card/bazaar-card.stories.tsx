import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { BazaarCard } from ".";

type T = typeof BazaarCard;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  bazaar: {
    id: 1,
    name: "A.作品展示",
    descriptions: "美術部員が描き溜めてきた作品たちを展示します。ぜひ見に来てね！",
    image: "https://panproduct.com/blog/wp-content/uploads/2021/07/32.png",
    prices: [{ id: 1, price: "無料", bazaarId: 1 }],
    group: "美術部",
    group_type: "recreation",
  },
};

export default {
  args,
  argTypes: {
    bazaar: {
      description: "Bazaar data",
      control: {
        type: "object",
      },
    },
  },
  component: BazaarCard,
} as Meta;

export const Default: Story = {};
