import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { TimeTableElement } from ".";

type T = typeof TimeTableElement;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  event: {
    id: 1,
    title: "オープニング",
    descriptions: "空白の2年間、たくさんの協力を得てついに開催！溜め込んだものを全て出し切れ！高専祭開幕です！",
    date: "2022-10-30 9:00",
    venue: "メインステージ",
    start_time: "2022-10-30 9:00",
    end_time: "2022-10-30 9:30",
    stage: "main",
  },
};

export default {
  args,
  argTypes: {
    event: {
      description: "LiveEvent without id",
      control: {
        type: "object",
      },
    },
  },
  component: TimeTableElement,
} as Meta;

export const Default: Story = {};
export const Main: Story = {
  args: {
    event: {
      ...args.event,
      stage: "main",
    },
  },
};
export const Sub: Story = {
  args: {
    event: {
      ...args.event,
      stage: "sub",
    },
  },
};
export const Live: Story = {
  args: {
    event: {
      ...args.event,
      stage: "live",
    },
  },
};
export const Game: Story = {
  args: {
    event: {
      ...args.event,
      stage: "game",
    },
  },
};
