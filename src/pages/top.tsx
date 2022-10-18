import type { FC } from "react";
import { Top } from "../components/templates/top";

// TODO: Fetch with swr
const TopPage: FC = () => <Top events={[
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
]} />;

export { TopPage };
