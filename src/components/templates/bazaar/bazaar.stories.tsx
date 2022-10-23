import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { Bazaar } from ".";

type T = typeof Bazaar;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  bazaars: [
    {
      name: "A.作品展示",
      description: "美術部員が描き溜めてきた作品たちを展示します。ぜひ見に来てね！",
      image: "https://panproduct.com/blog/wp-content/uploads/2021/07/32.png",
      prices: ["無料"],
      group: "美術部",
    },
    {
      name: "A.作品展示",
      description: "美術部員が描き溜めてきた作品たちを展示します。ぜひ見に来てね！",
      image: "https://panproduct.com/blog/wp-content/uploads/2021/07/32.png",
      prices: ["無料"],
      group: "美術部",
    },
    {
      name: "A.作品展示",
      description: "美術部員が描き溜めてきた作品たちを展示します。ぜひ見に来てね！",
      image: "https://panproduct.com/blog/wp-content/uploads/2021/07/32.png",
      prices: ["無料"],
      group: "美術部",
    },
    {
      name: "A.作品展示",
      description: "美術部員が描き溜めてきた作品たちを展示します。ぜひ見に来てね！",
      image: "https://panproduct.com/blog/wp-content/uploads/2021/07/32.png",
      prices: ["無料"],
      group: "美術部",
    },
    {
      name: "A.作品展示",
      description: "美術部員が描き溜めてきた作品たちを展示します。ぜひ見に来てね！",
      image: "https://panproduct.com/blog/wp-content/uploads/2021/07/32.png",
      prices: ["無料"],
      group: "美術部",
    },
    {
      name: "A.作品展示",
      description: "美術部員が描き溜めてきた作品たちを展示します。ぜひ見に来てね！",
      image: "https://panproduct.com/blog/wp-content/uploads/2021/07/32.png",
      prices: ["無料"],
      group: "美術部",
    },
    {
      name: "A.作品展示",
      description: "美術部員が描き溜めてきた作品たちを展示します。ぜひ見に来てね！",
      image: "https://panproduct.com/blog/wp-content/uploads/2021/07/32.png",
      prices: ["無料"],
      group: "美術部",
    },
  ],
};

export default {
  args,
  argTypes: {},
  component: Bazaar,
} as Meta;

export const Default: Story = {};
