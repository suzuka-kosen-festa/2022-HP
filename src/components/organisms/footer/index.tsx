import React from "react";
import tw from "twin.macro";
import { AnchorText } from "../../atoms/anchor-text";

const Footer: React.FC = () => (
  <footer role={"contentinfo"} css={tw` w-screen`}>
    <AnchorText
      href="https://github.com/suzuka-kosen-festa/2022-HP/blob/main/LICENSE"
      css={tw`bg-black text-center p-2`}
    >
      &copy; 第57回鈴鹿高専祭実行委員会
    </AnchorText>
  </footer>
);

export { Footer };
