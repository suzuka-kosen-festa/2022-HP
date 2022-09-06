import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { MapSection } from ".";

type T = typeof MapSection;
type Story = ComponentStoryObj<T>;

const data = {
  center: {
    lat: 34.851_671_242_413_17,
    lng: 136.581_323_097_843_55,
  },
  children: `510-0294 三重県鈴鹿市白子町\n近鉄白子駅から徒歩約30分\n三重交通バス東旭が丘3丁目から徒歩約7分`,
  label: "鈴鹿工業高等専門学校",
  title: "アクセス",
  zoom: 15,
};

export default {
  args: { center: data.center, children: data.children, label: data.label, title: data.title, zoom: data.zoom },
  component: MapSection,
} as ComponentMeta<T>;

export const Default: Story = {};
