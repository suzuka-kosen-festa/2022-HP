import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { PickupCard } from ".";

type T = typeof PickupCard;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  event: {
    id: 1,
    title: "オープニング",
    descriptions: "空白の2年間、たくさんの協力を得て遂に開催！溜め込んだものを全て出し切れ！高専祭開幕です！",
    date: "2022-10-30 09:00",
    venue: "メインステージ",
    start_time: "2022-10-30 09:00",
    end_time: "2022-10-30 09:30",
    stage: "main",
  }
}

export default {
  args,
  argTypes: {
    event: {
      description: "Event data",
      control: {
        type: "object"
      }
    }
  },
  component: PickupCard,
} as Meta;

export const Default: Story = {};
