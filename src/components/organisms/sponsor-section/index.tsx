import React from "react";
import tw from "twin.macro";
import { SponsorSectionProperties } from "../../../models";
import { Heading } from "../../atoms/heading";
import { Text } from "../../atoms/text";

const SponsorSectionContainar = tw.section`space-y-[calc(200vw / 63)]`;

const SponsorSection: React.FC<SponsorSectionProperties> = ({ children, sponsors, title, ...rest }) => (
  <SponsorSectionContainar aria-label={"協賛企業"} {...rest}>
    <Heading>{title}</Heading>
    <Text css={tw`whitespace-pre-wrap`}>{children}</Text>
    <Text css={tw`whitespace-pre-wrap`}>{sponsors}</Text>
  </SponsorSectionContainar>
);

export { SponsorSection };
