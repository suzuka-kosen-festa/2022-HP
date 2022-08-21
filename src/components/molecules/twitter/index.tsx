import React, { useEffect } from "react";

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
    <figure>
      <a
        className={"twitter-timeline"}
        data-width={"288"}
        data-height={"410"}
        href={"https://twitter.com/KOSENFESTA?ref_src=twsrc%5Etfw"}
      >
        Tweets by KOSENFESTA
      </a>
    </figure>
  );
};

export { Twitter };
