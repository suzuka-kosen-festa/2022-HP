import React from "react";
import tw from "twin.macro";
import { Text } from "../text";
const Footer: React.FC = () => (
  <footer css={tw` w-screen`}>
    <Text css={tw`bg-black text-center p-2`}>&copy; 第57回鈴鹿高専祭実行委員会</Text>
  </footer>
);

export { Footer };
