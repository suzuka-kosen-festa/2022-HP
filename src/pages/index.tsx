import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import React from "react";
import { AboutSection } from "../components/organisms/about-section";
import { ContactSection } from "../components/organisms/contact-section";
import { FestaSection } from "../components/organisms/festa-section";
import { MapSection } from "../components/organisms/map-section";
import { SnsSection } from "../components/organisms/sns-section";
import { SponsorSection } from "../components/organisms/sponsor-section";
import { _Field, RYaml, Sponsors } from "../models";
import { getDataByField } from "../utils/api";
import { Seo } from "../utils/seo";

type Properties = InferGetStaticPropsType<typeof getStaticProps>;

// eslint-disable-next-line unicorn/prevent-abbreviations
export const getStaticProps: GetStaticProps<{ result: RYaml<Sponsors> }> = () => {
  const fields: Array<_Field> = [{ __typename: "Sponsors", path: "sponsors" }];
  const data = getDataByField(fields);
  const result = data.find(({ field }) => field === "sponsors") as RYaml<Sponsors>;
  return {
    props: {
      result,
    },
  };
};

const Home: NextPage<Properties> = ({ result }) => (
  <React.Fragment>
    <Seo
      title={"Re:ROAD | 第57回鈴鹿高専祭"}
      description={"まだ何色にも色づいていない第57回鈴鹿高専祭を今から色づけていきます。"}
    />
    <FestaSection title={"今年のテーマ「Re:ROAD」について"}>
      {
        "第57回鈴鹿高専祭、テーマは「Re:ROAD」\n今回のテーマ「Re:ROAD」には「道（Road）」を創り直す（Re）という意味と、「弾をこめる・再補填する（Reload）」という意味を使い、「今年の準備をする」「来年以降、これから先のための高専祭を行う」という想いが込められています。\n\n2019年を最後に鈴鹿高専祭は行われていません。\nそのため過去のデータもあまり残っておらず本当に1から、いや0からのスタートです。\nまだ何色にも色づいていない第57回鈴鹿高専祭を今から色づけていきます。"
      }
    </FestaSection>
    {result.data !== null && (
      <SponsorSection title={"協賛企業"} sponsors={result.data}>
        今年の高専祭は3年ぶりの開催。 以下の企業様が鈴鹿高専祭を応援してくれています！
      </SponsorSection>
    )}
    <SnsSection title={"SNS"} />
    <ContactSection
      buttonText={"お問い合わせ"}
      title={"お問い合わせ"}
      link={"https://docs.google.com/forms/d/e/1FAIpQLSeMMA1YJbqClu_6ktzhV8u9hjwfOtJAMT3OLiIpyJJsqzGbdw/viewform"}
    >
      第57回鈴鹿高専祭に関するお問い合わせは下のボタンからお願いいたします。(google formsが開きます)
    </ContactSection>
    <MapSection
      center={{
        lat: 34.851_671_242_413_17,
        lng: 136.581_323_097_843_55,
      }}
      zoom={15}
      title={"アクセス"}
      label={"鈴鹿工業高等専門学校"}
    >
      {"510-0294 三重県鈴鹿市白子町\n近鉄白子駅から徒歩約30分\n三重交通バス東旭が丘3丁目から徒歩約7分"}
    </MapSection>
    <AboutSection buttonText={"鈴鹿高専ホームページ"} link={"https://www.suzuka-ct.ac.jp/"} title={"鈴鹿高専について"}>
      詳しくは本校ホームページをご覧ください。
    </AboutSection>
  </React.Fragment>
);

export default Home;
