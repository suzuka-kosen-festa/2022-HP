import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Map } from ".";

type T = typeof Map;
type Story = ComponentStoryObj<T>;

const data = {
  center: {
    lat: 34.851_671_242_413_17,
    lng: 136.581_323_097_843_55,
  },
  title: "鈴鹿工業高等専門学校",
  zoom: 15,
};

export default {
  args: { center: data.center, title: data.title, zoom: data.zoom },
  component: Map,
} as ComponentMeta<T>;

export const Default: Story = {};
