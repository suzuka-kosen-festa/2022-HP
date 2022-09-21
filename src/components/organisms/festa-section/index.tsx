import type { FC } from "react";
import tw from "twin.macro";
import type { FestaSectionProperties } from "../../../models";
import { Heading } from "../../atoms/heading";
import { Text } from "../../atoms/text";

const FestaSectionContainer = tw.section`flex flex-col space-y-[calc(200vw / 63)]`;

const FestaSection: FC<FestaSectionProperties> = ({ children, title, ...rest }) => (
  <FestaSectionContainer aria-label="今年のテーマ「Re:ROAD」について" {...rest}>
    <Heading>{title}</Heading>
    <Text css={tw`whitespace-pre-wrap`}>{children}</Text>
  </FestaSectionContainer>
);

export { FestaSection };
