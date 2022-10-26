import type { FC } from "react";
import tw from "twin.macro";
import { Link } from "wouter";
import { useMemo } from "react";
import type { BazaarProperties } from "./types/model";
import { Title } from "../../molecules/title";
import { Switching } from "../../atoms/switching";
import { BazaarCard } from "../../molecules/bazaar-card";
import { Button } from "../../atoms/button";
import { Text } from "../../atoms/text";

const Main = tw.main`pt-1 pb-8 sm:(pt-6 pb-40)`;

const BazaarPageBox = tw.div`flex flex-col justify-center items-center`;

const BazaarCardBox = tw.ul`grid gap-6 grid-cols-1 pt-6 mb-8 xl:(grid-cols-2 pt-32 mb-36) 3xl:(grid-cols-3 pt-48 mb-40)`;

const buttonData = [
  {
    buttonText: "飲食団体",
    query: "eating",
  },
  {
    buttonText: "レク・展示団体",
    query: "recreation",
  },
];

const Bazaar: FC<BazaarProperties> = ({ bazaars }) => {
  const query = new URLSearchParams(window.location.search);
  const isRecreation = query.get("select") === "recreation";
  return (
    <Main aria-label="Bazaar page">
      <Title colorKey="green">Bazaar</Title>
      <BazaarPageBox>
        <Switching buttonData={buttonData} color="green" />
        <BazaarCardBox>
          {bazaars.map(bazaar => (
            <BazaarCard bazaar={bazaar} key={bazaar.id} />
          ))}
        </BazaarCardBox>
        {isRecreation ? (
          <Text css={tw`mb-8 md:mb-36 lg:mb-40`}>
            これらの団体のほかに、C.専攻科・E.化学マジック・S.エコカーも展示を行っています！ぜひ見に行ってみてください！
          </Text>
        ) : null}
        <Link to="/">
          <Button textStyles={tw`text-white`} colorKey="green" as="a" role="button">
            トップページに戻る
          </Button>
        </Link>
      </BazaarPageBox>
    </Main>
  );
};

export { Bazaar };
