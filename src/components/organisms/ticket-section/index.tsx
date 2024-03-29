import type { FC } from "react";
import tw from "twin.macro";
import type { TicketSectionProperties } from "./type/model";
import { Heading } from "../../atoms/heading";
import { Text } from "../../atoms/text";

const TicketSectionContainer = tw.section`flex flex-col justify-center items-center`;

const Container = tw.nav`flex flex-col space-x-0 space-y-4 sm:(flex-row space-x-4 space-y-0) justify-center items-center`;

const TicketSection: FC<TicketSectionProperties> = ({ title, children, ...rest }) => (
  <TicketSectionContainer aria-label="ticket" {...rest}>
    <Heading css={tw`mb-4 sm:mb-8`} colorKey="yellow">
      {title}
    </Heading>
    <Text css={tw`whitespace-pre-wrap mb-6 sm:mb-16`}>{children}</Text>
    <Container>
      <Text>フォームでの受付終了しました。たくさんのご応募ありがとうございました。</Text>
    </Container>
  </TicketSectionContainer>
);

export { TicketSection };
