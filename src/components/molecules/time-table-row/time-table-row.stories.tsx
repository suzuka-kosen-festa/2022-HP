import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { TimeTableRow } from ".";

type T = typeof TimeTableRow;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
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
    {
      id: 5,
      title: "へぇ王",
      descriptions: "先生達が自分の研究を紹介！4年生は卒検部を考えるいい機会に！高専生、中学生に向けた勉強イベント！",
      date: "2022-10-30 11:30",
      venue: "メインステージ",
      start_time: "2022-10-30 11:30",
      end_time: "2022-10-30 12:00",
      stage: "main",
    },
    {
      id: 6,
      title: "腕1GP",
      descriptions: "高専祭で腕相撲の1番を決める！一般参加ありの白熱バトルイベント！",
      date: "2022-10-30 12:30",
      venue: "メインステージ",
      start_time: "2022-10-30 12:30",
      end_time: "2022-10-30 13:00",
      stage: "main",
    },
    {
      id: 7,
      title: "TTTGP",
      descriptions:
        "その名もTop of The TikTok GP！TikTokで流行ったダンス、音源、Tik Tokerなど TikTokに関するクイズを出題！",
      date: "2022-10-30 13:15",
      venue: "メインステージ",
      start_time: "2022-10-30 13:15",
      end_time: "2022-10-30 13:45",
      stage: "main",
    },
    {
      id: 8,
      title: "EXBALLON",
      descriptions: "仲間を信じて、風船割って、四字熟語をより早く当てるチーム競技！！",
      date: "2022-10-30 14:00",
      venue: "メインステージ",
      start_time: "2022-10-30 14:00",
      end_time: "2022-10-30 14:45",
      stage: "main",
    },
  ],
  intervals: [2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 3, 5],
  stage: "main",
};

export default {
  args,
  argTypes: {
    events: {
      description: "Events data",
      control: {
        type: "array",
      },
    },
    intervals: {
      description: "Intervals of element",
      control: {
        type: "array",
      },
    },
    stage: {
      description: "Live stage",
      control: {
        type: "select",
        options: ["main", "sub", "live", "game"],
      },
    },
  },
  component: TimeTableRow,
} as Meta;

export const Default: Story = {};
