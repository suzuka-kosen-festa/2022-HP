import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { PickupSection } from ".";

type T = typeof PickupSection;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  title: "Pick up events",
  cardData: [
    {
      title: "へぇ王",
      description: "先生たちが自分の研究を紹介！4年生は卒研部を考えるいい機会に！高専生、中学生に向けた勉強イベント！",
      startTime: "2022-10-30 11:30",
      stage: "Main",
    },
    {
      title: "TTTGP",
      description: "その名もTop of TikTok GP！TikTokで流行ったダンス、音源、TikTokerなどTikTokに関するクイズを出題！",
      startTime: "2022-10-30 13:15",
      stage: "Main",
    },
    {
      title: "俺1GP",
      description: "鈴鹿高専のお笑いライブ！笑いで全てを包み込め！",
      startTime: "2022-10-31 13:00",
      stage: "Main",
    },
    {
      title: "メモリーズ",
      description: "5年生のダンス披露！みんなで頑張って踊ります！",
      startTime: "2022-10-31 14:15",
      stage: "Main",
    },
  ],
  buttonText: "タイムスケジュールを見る",
};

export default {
  args,
  argTypes: {
    buttonText: {
      description: "The text for button in section",
      control: {
        type: "text",
      },
    },
    cardData: {
      description: "Data for pick up event card",
      control: {
        type: "array",
      },
    },
    title: {
      description: "Title of section",
      control: {
        type: "text",
      },
    },
  },
  component: PickupSection,
} as Meta;

export const Default: Story = {};
