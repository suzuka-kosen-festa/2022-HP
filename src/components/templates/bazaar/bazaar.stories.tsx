import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { Bazaar } from ".";

type T = typeof Bazaar;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  bazaars: [
    {
      id: 1,
      name: "A.作品展示",
      descriptions: "美術部員が描き溜めてきた作品たちを展示します。ぜひ見に来てね！",
      image: "https://panproduct.com/blog/wp-content/uploads/2021/07/32.png",
      prices: [{ id: 1, price: "無料", bazaarId: 1 }],
      group: "美術部",
      group_type: "recreation",
    },
    {
      id: 1,
      name: "A.作品展示",
      descriptions: "美術部員が描き溜めてきた作品たちを展示します。ぜひ見に来てね！",
      image: "https://panproduct.com/blog/wp-content/uploads/2021/07/32.png",
      prices: [{ id: 1, price: "無料", bazaarId: 1 }],
      group: "美術部",
      group_type: "recreation",
    },
    {
      id: 1,
      name: "A.作品展示",
      descriptions: "美術部員が描き溜めてきた作品たちを展示します。ぜひ見に来てね！",
      image: "https://panproduct.com/blog/wp-content/uploads/2021/07/32.png",
      prices: [{ id: 1, price: "無料", bazaarId: 1 }],
      group: "美術部",
      group_type: "recreation",
    },
    {
      id: 1,
      name: "A.作品展示",
      descriptions: "美術部員が描き溜めてきた作品たちを展示します。ぜひ見に来てね！",
      image: "https://panproduct.com/blog/wp-content/uploads/2021/07/32.png",
      prices: [{ id: 1, price: "無料", bazaarId: 1 }],
      group: "美術部",
      group_type: "recreation",
    },
    {
      id: 1,
      name: "A.作品展示",
      descriptions: "美術部員が描き溜めてきた作品たちを展示します。ぜひ見に来てね！",
      image: "https://panproduct.com/blog/wp-content/uploads/2021/07/32.png",
      prices: [{ id: 1, price: "無料", bazaarId: 1 }],
      group: "美術部",
      group_type: "recreation",
    },
    {
      id: 1,
      name: "A.作品展示",
      descriptions: "美術部員が描き溜めてきた作品たちを展示します。ぜひ見に来てね！",
      image: "https://panproduct.com/blog/wp-content/uploads/2021/07/32.png",
      prices: [{ id: 1, price: "無料", bazaarId: 1 }],
      group: "美術部",
      group_type: "recreation",
    },
    {
      id: 1,
      name: "A.作品展示",
      descriptions: "美術部員が描き溜めてきた作品たちを展示します。ぜひ見に来てね！",
      image: "https://panproduct.com/blog/wp-content/uploads/2021/07/32.png",
      prices: [{ id: 1, price: "無料", bazaarId: 1 }],
      group: "美術部",
      group_type: "recreation",
    },
  ],
};

export default {
  args,
  argTypes: {
    bazaars: {
      description: "Bazaars data",
      control: {
        type: "array",
      },
    },
  },
  component: Bazaar,
} as Meta;

export const Default: Story = {};
