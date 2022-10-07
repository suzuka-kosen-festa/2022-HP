import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { PickupCard } from ".";

type T = typeof PickupCard;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  title: "へぇ王",
  description: "先生たちが自分の研究を紹介！4年生は卒研部を考えるいい機会に！高専生、中学生に向けた勉強イベント！",
  startTime: "2022-10-30 11:30",
  stage: "Main",
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
    description: {
      description: "Description of event",
      control: {
        type: "text",
      },
    },
    startTime: {
      description: "Start time of event",
      control: {
        type: "date",
      },
    },
    stage: {
      description: "Where the event will be held",
      control: {
        type: "select",
        options: ["Main", "Sub", "Live", "Game"],
      },
    },
  },
  component: PickupCard,
} as Meta;

export const Default: Story = {};
