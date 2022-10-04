import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import type { ComponentPropsWithoutRef } from "react";
import { SnsSection } from ".";

type T = typeof SnsSection;
type Story = ComponentStoryObj<T>;

const args: ComponentPropsWithoutRef<T> = {
  title: "SNS",
  children: "今年の鈴鹿高専祭では、史上初となるラジオの配信を行っています。\nご視聴はYouTube、Spotifyから！",
};

export default { args, component: SnsSection } as ComponentMeta<T>;

export const Default: Story = {};
