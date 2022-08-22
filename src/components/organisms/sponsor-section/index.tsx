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
    <ul css={tw`whitespace-pre-wrap`}>
      {sponsors.map((item, index) => (
        <li
          css={tw`list-disc list-inside font-zen text-white text-[calc(12px + 4 * ((100vw - 378px) / 1134))] select-none`}
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  </SponsorSectionContainar>
);

export { SponsorSection };
