import React, { useEffect } from "react";
import tw from "twin.macro";
import { AnchorText } from "../../atoms/anchor-text";

const TwitterContainer = tw.figure`w-[300px] h-[420px]`;

const TwitterMB = tw.div`inline sm:hidden`;

const TwitterPC = tw.div`hidden sm:inline`;

const Twitter: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.body.append(script);
    return () => {
      script.remove();
    };
  }, []);
  return (
    <TwitterContainer>
      <TwitterMB>
        <AnchorText
          className={"twitter-timeline"}
          data-width={"240"}
          data-height={"420"}
          href={"https://twitter.com/KOSENFESTA?ref_src=twsrc%5Etfw"}
        >
          Tweets by KOSENFESTA
        </AnchorText>
      </TwitterMB>
      <TwitterPC>
        <AnchorText
          className={"twitter-timeline"}
          data-width={"288"}
          data-height={"410"}
          href={"https://twitter.com/KOSENFESTA?ref_src=twsrc%5Etfw"}
        >
          Tweets by KOSENFESTA
        </AnchorText>
      </TwitterPC>
    </TwitterContainer>
  );
};

export { Twitter };
