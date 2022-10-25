import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { Member } from ".";

type T = typeof Member;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  rikuto: {
    imagePath: "/statics/members/rikuto_kuwahara.webp",
    name: "Rikuto Kuwahara",
  },
  shoma: {
    imagePath: "/statics/members/shoma_kobayashi.webp",
    name: "Shoma Kobayashi",
    position: "sub",
  },
  members: [
    {
      imagePath: "/statics/members/rintaro_itokawa.webp",
      name: "Rintaro Itokawa",
    },
    {
      imagePath: "/statics/members/rintaro_itokawa.webp",
      name: "Rintaro Itokawa",
    },
    {
      imagePath: "/statics/members/rintaro_itokawa.webp",
      name: "Rintaro Itokawa",
    },
    {
      imagePath: "/statics/members/rintaro_itokawa.webp",
      name: "Rintaro Itokawa",
    },
    {
      imagePath: "/statics/members/rintaro_itokawa.webp",
      name: "Rintaro Itokawa",
    },
    {
      imagePath: "/statics/members/rintaro_itokawa.webp",
      name: "Rintaro Itokawa",
    },
    {
      imagePath: "/statics/members/rintaro_itokawa.webp",
      name: "Rintaro Itokawa",
    },
    {
      imagePath: "/statics/members/rintaro_itokawa.webp",
      name: "Rintaro Itokawa",
    },
    {
      imagePath: "/statics/members/rintaro_itokawa.webp",
      name: "Rintaro Itokawa",
    },
    {
      imagePath: "/statics/members/rintaro_itokawa.webp",
      name: "Rintaro Itokawa",
    },
  ],
};

export default {
  args,
  argTypes: {
    rikuto: {
      description: "Rikuto Kuwahara's data",
      control: {
        type: "object",
      },
    },
    shoma: {
      description: "Shoma Kobayashi's data",
      control: {
        type: "object",
      },
    },
    members: {
      description: "Other member's data",
      control: {
        type: "array",
      },
    },
  },
  component: Member,
} as Meta;

export const Default: Story = {};
