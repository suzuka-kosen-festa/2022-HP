import type { NextPage } from "next";
import React from "react";
import { Text } from "../components/atoms/text";
import { Seo } from "../utils/seo";

const Home: NextPage = () => (
  <React.Fragment>
    <Seo
      title={"Re:ROAD | 第57回鈴鹿高専祭"}
      description={"まだ何色にも色づいていない第57回鈴鹿高専祭を今から色づけていきます。"}
    />
    <main>
      <Text>Hello Next.js</Text>
    </main>
  </React.Fragment>
);

export default Home;
