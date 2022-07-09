import type { NextPage } from "next";
import tw from "twin.macro";
import { Text } from "../components/atoms/text";

const Home: NextPage = () => (
  <main>
    <Text css={tw`text-xl`}>Hello Next.js</Text>
  </main>
);

export default Home;
