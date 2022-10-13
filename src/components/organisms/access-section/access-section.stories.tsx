import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import { AccessSection } from ".";

type T = typeof AccessSection;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  attention: `駐車場はスペースに限りがございますのでご了承ください。\n30日(日)は鈴鹿医療科学大学 白子キャンパス 様\n31日(月)はMEGAドン・キホーテUNY鈴鹿店 様の屋上駐車場を\nご利用ください。`,
  center: {
    lat: 34.851_671_242_413_17,
    lng: 136.581_323_097_843_55,
  },
  info: `510-0294 三重県鈴鹿市白子町\n近鉄白子駅から徒歩約30分\n三重交通バス東旭が丘3丁目から徒歩約7分`,
  label: "鈴鹿工業高等専門学校",
  subtitle: "お車でお越しの方へ",
  title: "Access",
  zoom: 15,
};

export default {
  args,
  argTypes: {
    attention: {
      description: "Attention context",
      control: {
        type: "text",
      },
    },
    center: {
      description: "Center of map",
      control: {
        type: "object",
      },
    },
    info: {
      description: "Address of NIT Suzuka",
      control: {
        type: "text",
      },
    },
    label: {
      description: "Label of map",
      control: {
        type: "text",
      },
    },
    subtitle: {
      description: "Sub title for attention",
      control: {
        type: "text",
      },
    },
    title: {
      description: "Title of section",
      control: {
        type: "text",
      },
    },
    zoom: {
      description: "Zoom of map",
      control: {
        type: "number",
      },
    },
  },
  component: AccessSection,
} as Meta;

export const Default: Story = {};
