import type { FC } from "react";
import tw from "twin.macro";
import { Link } from "wouter";
import type { MemberProperties } from "./types/model";
import { Title } from "../../molecules/title";
import { MemberCard } from "../../molecules/member-card";
import { Button } from "../../atoms/button";

const Main = tw.main`pt-1 pb-8 sm:(pt-6 pb-40)`;

const MemberBox = tw.div`flex flex-col justify-center items-center`;

const Member: FC<MemberProperties> = ({ rikuto, shoma, members }) => (
  <Main aria-label="member page">
    <Title css={tw`mb-5.5 sm:mb-14`} colorKey="blue">
      Members
    </Title>
    <MemberBox>
      <h2 css={tw`font-zen font-bold text-text text-base mb-9 sm:(text-2xl mb-50)`}>
        第57回鈴鹿高専祭 Re:ROADの実行委員をご紹介します！
      </h2>
      <div css={tw`grid grid-cols-2 gap-8 mb-10 sm:(gap-40 mb-16)`}>
        <MemberCard imagePath={rikuto.imagePath} name={rikuto.name} position="leader" />
        <MemberCard imagePath={shoma.imagePath} name={shoma.name} position="sub" />
      </div>
      <div css={tw`grid grid-cols-3 gap-2 mb-8 sm:mb-40 lg:(grid-cols-5 gap-8)`}>
        {members.map(member => (
          <MemberCard imagePath={member.imagePath} name={member.name} key={member.name} />
        ))}
      </div>
      <Link to="/">
        <Button textStyles={tw`text-white`} colorKey="blue" as="a" role="button">
          トップページに戻る
        </Button>
      </Link>
    </MemberBox>
  </Main>
);

export { Member };
