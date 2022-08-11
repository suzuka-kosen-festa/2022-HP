import React from "react";
import tw from "twin.macro";
import { Text } from "../../atoms/text";
const Footer: React.FC = () => (
  <footer role={"contentinfo"} css={tw` w-screen`}>
    <Text role={"link"} as="a" css={tw`bg-black text-center p-2`}>
      &copy; 第57回鈴鹿高専祭実行委員会
    </Text>
  </footer>
);

export { Footer };
