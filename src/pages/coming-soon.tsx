import type { FC } from "react";
import tw from "twin.macro";
import { Link } from "wouter";
import { Text } from "../components/atoms/text";
import { Button } from "../components/atoms/button";

const Main = tw.main`h-full`;

const Section = tw.section`flex flex-col items-center justify-center space-y-8`;

const ComingSoonPage: FC = () => (
  <Main aria-label="coming soon">
    <Section>
      <h1 css={tw`font-bold text-lg md:text-4xl`}>Coming soon...</h1>
      <Text>続報をお待ち下さい。</Text>
      <Link to="/">
        <Button as="a" colorKey="yellow" role="button">
          トップページへ戻る
        </Button>
      </Link>
    </Section>
  </Main>
);

export { ComingSoonPage };
