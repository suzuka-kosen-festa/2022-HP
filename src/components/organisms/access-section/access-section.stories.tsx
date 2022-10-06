import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import { AccessSection } from ".";

type T = typeof AccessSection;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  center: {
    lat: 34.851_671_242_413_17,
    lng: 136.581_323_097_843_55,
  },
  children: `510-0294 三重県鈴鹿市白子町\n近鉄白子駅から徒歩約30分\n三重交通バス東旭が丘3丁目から徒歩約7分`,
  label: "鈴鹿工業高等専門学校",
  title: "Access",
  zoom: 15,
};

export default {
  args,
  argTypes: {
    center: {
      description: "Center of map",
      control: {
        type: "object",
      },
    },
    children: {
      description: "Value of main sentence in section",
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
