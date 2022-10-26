import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { MemberCard } from ".";

type T = typeof MemberCard;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  imagePath: "/statics/members/rintaro_itokawa.webp",
  name: "Rintaro Itokawa",
};

export default {
  args,
  argTypes: {
    imagePath: {
      description: "Pass the path to photo",
      control: {
        type: "text",
      },
    },
    name: {
      description: "Name of member",
      control: {
        type: "text",
      },
    },
    position: {
      description: "Position in the members",
      control: {
        type: "text",
      },
    },
  },
  component: MemberCard,
} as Meta;

export const Default: Story = {};
export const LEADER: Story = {
  args: {
    imagePath: "/statics/members/rikuto_kuwahara.webp",
    name: "Rikuto Kuwahara",
    position: "leader",
  },
};
export const SUB: Story = {
  args: {
    imagePath: "/statics/members/shoma_kobayashi.webp",
    name: "Shoma Kobayashi",
    position: "sub",
  },
};
