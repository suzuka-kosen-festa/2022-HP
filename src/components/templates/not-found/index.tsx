import type { FC } from "react";
import tw from "twin.macro";
import { Link } from "wouter";
import type { NotFoundProperties } from "./types/model";
import { StatusMessageSection } from "../../organisms/status-message-section";
import { Text } from "../../atoms/text";
import { Button } from "../../atoms/button";

const Main = tw.main`my-auto`;

const NotFound: FC<NotFoundProperties> = ({ status, message }) => (
  <Main aria-label="Not Found">
    <StatusMessageSection status={status} message={message}>
      <Text>現在このページは</Text>
      <Text>表示することができません。</Text>
      <Text>続報をお待ち下さい。</Text>
      <Link to="/">
        <Button as="a" colorKey="yellow" role="button">
          トップページへ戻る
        </Button>
      </Link>
    </StatusMessageSection>
  </Main>
);

export { NotFound };
