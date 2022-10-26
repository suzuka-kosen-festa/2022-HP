import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { ComponentPropsWithoutRef } from 'react';
import { TimeTable } from ".";

type T = typeof TimeTable;
type Story = ComponentStoryObj<T>;
type Meta = ComponentMeta<T>;

const args: ComponentPropsWithoutRef<T> = {
  events: {
    main: [
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
    sub: [
      {
        id: 1,
        title: "アコギ部ライブ",
        descriptions:
          "コロナ禍でライブが出来ない中でも日々の練習を経て実力を高めてきました！その努力を是非聞いてください！",
        date: "2022-10-30 09:30",
        venue: "サブステージ",
        start_time: "2022-10-30 09:30",
        end_time: "2022-10-30 11:00",
        stage: "sub",
      },
      {
        id: 2,
        title: "出張Radio",
        descriptions: "ラジオパーソナリティの御三方がサブステージに出張！たくさんのコーナーを開催します！乞うご期待！",
        date: "2022-10-30 11:00",
        venue: "サブステージ",
        start_time: "2022-10-30 11:00",
        end_time: "2022-10-30 11:30",
        stage: "sub",
      },
      {
        id: 3,
        title: "乃木坂イントロクイズ",
        descriptions: "乃木坂限定のイントロクイズ！2年連続優勝を果たしたチャンピオンも出場！今年はいかに！？",
        date: "2022-10-30 11:30",
        venue: "サブステージ",
        start_time: "2022-10-30 11:30",
        end_time: "2022-10-30 12:00",
        stage: "sub",
      },
      {
        id: 4,
        title: "アコギ部ライブ",
        descriptions:
          "コロナ禍でライブが出来ない中でも日々の練習を経て実力を高めてきました！その努力を是非聞いてください！",
        date: "2022-10-30 12:30",
        venue: "サブステージ",
        start_time: "2022-10-30 12:30",
        end_time: "2022-10-30 14:30",
        stage: "sub",
      },
      {
        id: 5,
        title: "出張Radio",
        descriptions: "ラジオパーソナリティの御三方がサブステージに出張！たくさんのコーナーを開催します！乞うご期待！",
        date: "2022-10-30 15:00",
        venue: "サブステージ",
        start_time: "2022-10-30 15:00",
        end_time: "2022-10-30 15:45",
        stage: "sub",
      },
    ],
    live: [
      {
        id: 1,
        title: "Lana meer",
        descriptions:
          "練習以上の演奏ができるように頑張ります!みなさん観に来てください!アピールポイントは心に響く演奏ですー!",
        date: "2022-10-30 11:30",
        venue: "ライブステージ",
        start_time: "2022-10-30 11:30",
        end_time: "2022-10-30 12:00",
        stage: "live",
      },
      {
        id: 2,
        title: "59.9",
        descriptions: "何かとは言いませんが 60 の壁を越えられなかった人たちです。ギリギリで生きている方は是非。",
        date: "2022-10-30 12:15",
        venue: "ライブステージ",
        start_time: "2022-10-30 12:15",
        end_time: "2022-10-30 12:45",
        stage: "live",
      },
      {
        id: 3,
        title: "さうし～きゃっと",
        descriptions:
          "吉武:音楽さいこーー高専祭さいこーー\nどこよりも湧かせます\n後藤:僕らが奏でる音をたのしんで\n来田:ダブルシャウエッセン 1000",
        date: "2022-10-30 13:00",
        venue: "ライブステージ",
        start_time: "2022-10-30 13:00",
        end_time: "2022-10-30 13:30",
        stage: "live",
      },
      {
        id: 4,
        title: "あどばん",
        descriptions: "ありぺー!!!うけだ!!!こーせー!!!まえけん!!!\nみんな揃ってギニュー特戦隊!!!",
        date: "2022-10-30 13:45",
        venue: "ライブステージ",
        start_time: "2022-10-30 13:45",
        end_time: "2022-10-30 14:15",
        stage: "live",
      },
    ],
    game: [
      {
        id: 1,
        title: "大乱闘スマッシュブラザーズSPECIAL",
        descriptions: "ガノンドルフ最強",
        date: "2022-10-30 09:30",
        venue: "ゲームイベント",
        start_time: "2022-10-30 09:30",
        end_time: "2022-10-30 13:45",
        stage: "game",
      },
    ],
    interval: {
      main: [2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 3, 5],
      sub: [2, 6, 2, 2, 2, 8, 2, 3, 1],
      live: [10, 2, 1, 2, 1, 2, 1, 2, 7],
      game: [2, 17, 9],
    },
  },
};

export default {
  args,
  argTypes: {
    events: {
      description: "Data of event",
      control: {
        type: "array",
      },
    },
  },
  component: TimeTable,
} as Meta;

export const Default: Story = {};
