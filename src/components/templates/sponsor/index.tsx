import type { FC } from "react";
import tw from "twin.macro";
import { Link } from "wouter";
import type { SponsorProperties } from "./types/model";
import { Title } from "../../molecules/title";
import { Text } from "../../atoms/text";
import { Button } from "../../atoms/button";

const Main = tw.main`pt-1 pb-8 sm:(pt-6 pb-40)`;

const SponsorBox = tw.div`flex flex-col items-center`;

const Sponsor: FC<SponsorProperties> = ({ sponsors }) => (
  <Main aria-label="Sponsor page">
    <Title css={tw`mb-5.5 sm:mb-14`} colorKey="red">
      Sponsor
    </Title>
    <SponsorBox>
      <h2 css={tw`font-zen font-bold text-text text-base mb-8 sm:(text-2xl mb-20)`}>
        第57回鈴鹿高専祭を開催するにあたり、支援してくださった企業様のお名前を以下に記載させていただきます。
      </h2>
      <ul css={tw`mb-8 sm:mb-40`}>
        {sponsors.map(sponsor => (
          <li key={sponsor.id}>
            <Text css={tw`text-base sm:text-2xl after:content-[" 様"]`}>{sponsor.name}</Text>
          </li>
        ))}
      </ul>
      <Link to="/">
        <Button textStyles={tw`text-white`} colorKey="red" as="a" role="button">
          トップページに戻る
        </Button>
      </Link>
    </SponsorBox>
  </Main>
);

export { Sponsor };
