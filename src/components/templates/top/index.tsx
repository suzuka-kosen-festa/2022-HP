import type { FC } from "react";
import tw from "twin.macro";
import type { TopProperties } from "./types/model";
import { Caution } from "../../molecules/caution";
import { Text } from "../../atoms/text";
import { TicketSection } from "../../organisms/ticket-section";
import { FestaSection } from "../../organisms/festa-section";
import { SnsSection } from "../../organisms/sns-section";
import type { SocialData } from "../../organisms/sns-section/types/model";
import { BazaarSection } from "../../organisms/bazaar-section";
import { MapSection } from "../../organisms/map-section";
import { SponsorSection } from "../../organisms/sponsor-section";
import { ContactSection } from "../../organisms/contact-section";
import { AccessSection } from "../../organisms/access-section";
import { AboutSection } from "../../organisms/about-section";
import { PickupSection } from "../../organisms/pickup-section";

const Highlight = tw.span`text-primary-red text-base`;

const CautionText = tw(Text)`text-base sm:text-base`;

const Main = tw.main`space-y-11 sm:space-y-20`;

const CautionBox = tw.section`flex flex-col justify-center items-center`;

const cautions = [
  <CautionText key="0">30日(日)は<Highlight>午前9時より午後3時</Highlight>、31日(月)は<Highlight>午前9時より午後4時</Highlight>に参加いただけます。</CautionText>,
  <CautionText key="1">
    Re:ROADでは、感染拡大防止のため<Highlight>入場制限</Highlight>を設けています。ご入場にはチケットが必要となります。
  </CautionText>,
  <CautionText key="2">発熱や風邪などの症状がある方のご入場はご遠慮ください。</CautionText>,
  <CautionText key="3">
    イベントにおける<Highlight>声出し</Highlight>はご遠慮いただき、<Highlight>拍手</Highlight>での応援にご協力ください。
  </CautionText>,
  <CautionText key="4">駐車場はスペースが限られているため、できるだけ公共交通機関を使ってお越しください。</CautionText>,
];

const socialLinks: Array<SocialData> = [
  {
    icon: "ci:twitter",
    key: "Twitter",
    link: "https://twitter.com/KOSENFESTA",
    style: tw`text-social-twitter hover:text-social-twitter-reaction`,
  },
  {
    icon: "ci:instagram",
    key: "Instagram",
    link: "https://www.instagram.com/kosenfesta/",
    style: tw`text-white bg-social-instagram hover:bg-social-instagram-reaction rounded-md sm:rounded-2xl`,
  },
  {
    icon: "ci:youtube",
    key: "YouTube",
    link: "https://www.youtube.com/channel/UCV4zdsdagV2N3juHRz2dqQQ",
    style: tw`text-social-youtube hover:text-social-youtube-reaction`,
  },
  {
    icon: "ci:spotify",
    key: "Spotify",
    link: "https://open.spotify.com/show/4n0D0dsaFaPbJTz7tGpfTR?si=8yZ1H8LzTM-ZJPyYN6CU-A",
    style: tw`text-social-spotify hover:text-social-spotify-reaction`,
  },
];

const attentions = [
  <CautionText key="1">学内における飲食物の食べ歩きはご遠慮ください。</CautionText>,
  <CautionText key="2">学内バザーにて購入した飲食物のお持ち帰りはご遠慮ください</CautionText>,
  <CautionText key="3">
    各出店バザーにお並びいただく際、並ばれる人数が多い場合は他のブースに移っていただくようにお声がけさせていただく場合がありますので、当日は係員の指示に従ってください。
  </CautionText>,
];

const Top: FC<TopProperties> = ({ events }) => (
  <Main aria-label="Top page">
    <CautionBox aria-label="『Re:ROAD』開催にあたってのお願い">
      <Caution sentence={cautions} title="『Re:ROAD』開催にあたってのお願い" />
    </CautionBox>
    <TicketSection title="Tickets">
      {
        "入場制限により、ご入場いただける方を一部の方のみに限定させていただいております。\n締切: 10/23 (日)\n\nまた、中学生の皆様向けに 中学生受験相談室 というイベントを実施いたしますので、ぜひご参加ください。\n日時：10/30（日)　10:30~12:00、14:00~15:30\n場所：マルチメディア棟1階 図書館"
      }
    </TicketSection>
    <FestaSection subtitle="今年のテーマ『Re:ROAD』について" buttonText="第57回鈴鹿高専祭メンバー" title="About">
      {
        "第57回鈴鹿高専祭、テーマは「Re:ROAD」\n今回のテーマ「Re:ROAD」には「道（Road）」を創り直す（Re）という意味と、「弾をこめる・再補填する（Reload）」という意味を使い、「今年の準備をする」「来年以降、これから先のための高専祭を行う」という想いが込められています。"
      }
    </FestaSection>
    <SnsSection socialData={socialLinks} title="SNS">
      {"今年の鈴鹿高専祭では、史上初となるラジオの配信を行っています。\nご視聴はYouTube、Spotifyから！"}
    </SnsSection>
    <PickupSection buttonText="タイムスケジュールを見る" title="Pick up events" events={events} />
    <BazaarSection
      attentionTitle="バザーに関するお願い"
      attentions={attentions}
      buttonText="バザーの詳細を見る"
      description={
        "飲食団体は18団体、その他レクリエーションには17団体が出店しています！ \n屋台・レク等のバザー詳細についてはこちらをクリック！"
      }
      title="Bazaar"
    />
    <MapSection title="Map" />
    <SponsorSection buttonText="READ MORE" title="Sponsor">
      {
        "第57回鈴鹿高専祭を開催するにあたり、多くの方にご支援賜りました。\nこちらのページにてご協賛いただいた企業様、ご支援いただいた個人様のお名前を記載しておりますのでぜひご覧ください。"
      }
    </SponsorSection>
    <ContactSection buttonText="お問い合わせ" link="https://forms.gle/MU9338vfudKPEnwS7" title="Contact us">
      第57回鈴鹿高専祭に関するお問い合わせは下のボタンからお願いいたします（google formsが開きます）
    </ContactSection>
    <AccessSection
      attention={
        "駐車場はスペースに限りがございますのでご了承ください。\n30日(日)は鈴鹿医療科学大学 白子キャンパス 様\n31日(月)はMEGAドン・キホーテUNY鈴鹿店 様の屋上駐車場　をご利用ください。"
      }
      center={{
        lat: 34.851_671_242_413_17,
        lng: 136.581_323_097_843_55,
      }}
      zoom={15}
      label="鈴鹿工業高等専門学校"
      info={"510-0294 三重県鈴鹿市白子町\n近鉄白子駅から徒歩約30分\n東旭が丘三丁目バス停から徒歩約7分"}
      subtitle="お車でお越しの方へ"
      title="Access"
    />
    <AboutSection buttonText="鈴鹿高専ホームページ" link="https://www.suzuka-ct.ac.jp" title="NIT,Suzuka College">
      鈴鹿高専については本校ホームページをご覧ください。
    </AboutSection>
  </Main>
);

export { Top };
