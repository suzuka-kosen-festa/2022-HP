import type { FC } from "react";
import tw from "twin.macro";
import type { FestaSectionProperties } from "./type/model";
import { Heading } from "../../atoms/heading";
import { Text } from "../../atoms/text";
import { SubHeading } from "../../atoms/sub-heading";

const FestaSectionContainer = tw.section`flex flex-col justify-center items-center`;

const FestaSection: FC<FestaSectionProperties> = ({ children, title, subtitle, ...rest }) => (
  <FestaSectionContainer aria-label="今年のテーマ「Re:ROAD」について" {...rest}>
    <Heading css={tw`mb-4 sm:mb-8`} colorKey="red">
      {title}
    </Heading>
    <SubHeading css={tw`mb-2.5 sm:mb-4`}>{subtitle}</SubHeading>
    <Text css={tw`whitespace-pre-wrap`}>{children}</Text>
  </FestaSectionContainer>
);

export { FestaSection };
