import type { FC } from "react";
import { Sponsor} from "../components/templates/sponsor";

const sponsors = ["朝明渓魚苑", "ハートフルクリニック北井内科", "株式会社DOKOSORE", "川越自動車学校", "茂理歯科医院", "有限会社 花重", "和田文具店", "BECK", "株式会社中勢自動車学校", "とうかい整形外科すずか", "株式会社花権", "有限会社西飯スポーツ", "家田クリニック", "ナガノスポーツ店", "旭ヶ丘歯科", "ホワイト歯科医院", "ごとうしんじ歯科", "野町どい眼科", "野町歯科医院", "旭ヶ丘ファミリークリニック", "焼肉 東家", "株式会社三重高等自動車学校", "八木医院", "Secret Studio", "鈴鹿高専テクノプラザ", "青峰同窓会"]

// TODO: Fetch with swr
const SponsorPage: FC = () => <Sponsor sponsors={sponsors} />;

export { SponsorPage };
