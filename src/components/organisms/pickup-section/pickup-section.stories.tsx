import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { PickupSection } from ".";

type T = typeof PickupSection;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  title: "Pick up events",
  events: [
    {
      id: 1,
      title: "オープニング",
      descriptions: "空白の2年間、たくさんの協力を得て遂に開催！溜め込んだものを全て出し切れ！高専祭開幕です！",
      date: "2022-10-30 09:00",
      venue: "メインステージ",
      start_time: "2022-10-30 09:00",
      end_time: "2022-10-30 09:30",
      stage: "main",
    },
    {
      id: 2,
      title: "音楽部コンサート",
      descriptions: "音楽部による、メインステージ最初を飾るセレモニー！盛り上がっていきましょー！",
      date: "2022-10-30 09:30",
      venue: "メインステージ",
      start_time: "2022-10-30 09:30",
      end_time: "2022-10-30 10:00",
      stage: "main",
    },
    {
      id: 3,
      title: "常識力バトル",
      descriptions: "高専生の常識をクイズ形式で競うバトル！高専生としての常識がある学生は誰か！？",
      date: "2022-10-30 10:00",
      venue: "メインステージ",
      start_time: "2022-10-30 10:00",
      end_time: "2022-10-30 10:30",
      stage: "main",
    },
    {
      id: 4,
      title: "勝山組",
      descriptions: "今年もよさこい勝山組の参加！鈴フェス大賞のよさこいを見逃すな！",
      date: "2022-10-30 10:45",
      venue: "メインステージ",
      start_time: "2022-10-30 10:45",
      end_time: "2022-10-30 11:15",
      stage: "main",
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
    events: {
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
