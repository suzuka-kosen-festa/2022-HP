import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { TimeTableElement } from ".";

type T = typeof TimeTableElement;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  title: "オープニング",
  descriptions: "空白の2年間、たくさんの協力を得てついに開催！溜め込んだものを全て出し切れ！高専祭開幕です！",
  start_time: "2022-10-30 9:00",
  end_time: "2022-10-30 9:30",
  stage: "main",
};

export default {
  args,
  argTypes: {
    title: {
      description: "Title of event",
      control: {
        type: "text",
      },
    },
    descriptions: {
      description: "Description of event",
      control: {
        type: "text",
      },
    },
    start_time: {
      description: "Start time of event",
      control: {
        type: "text",
      },
    },
    end_time: {
      description: "End time of event",
      control: {
        type: "text",
      },
    },
    stage: {
      description: "Stage category of event",
      control: {
        type: "select",
        options: ["main", "sub", "live", "game"],
      },
    },
  },
  component: TimeTableElement,
} as Meta;

export const Default: Story = {};
export const Main: Story = {
  args: {
    stage: "main",
  },
};
export const Sub: Story = {
  args: {
    stage: "sub",
  },
};
export const Live: Story = {
  args: {
    stage: "live",
  },
};
export const Game: Story = {
  args: {
    stage: "game",
  },
};
