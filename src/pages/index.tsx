import type { NextPage } from "next";
import React from "react";
import tw from "twin.macro";
import { Text } from "../components/atoms/text";
import { Seo } from "../utils/seo";

const Home: NextPage = () => (
  <React.Fragment>
    <Seo
      title={"Re:ROAD | 第57回鈴鹿高専祭"}
      description={"まだ何色にも色づいていない第57回鈴鹿高専祭を今から色づけていきます。"}
    />
    <main>
      <Text css={tw`text-xl`}>Hello Next.js</Text>
    </main>
  </React.Fragment>
);

export default Home;
