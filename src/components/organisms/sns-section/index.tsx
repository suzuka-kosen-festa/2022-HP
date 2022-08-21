import React from "react";
import tw from "twin.macro";
import type { SnsSectionProperties } from "../../../models";
import { Heading } from "../../atoms/heading";
import { Twitter } from "../../molecules/twitter";

const SnsSectionContainer = tw.section`flex flex-col space-y-[calc(200vw / 63)]`;

const SnsSection: React.FC<SnsSectionProperties> = ({ title, ...rest }) => (
  <SnsSectionContainer aria-label={"SNS"} {...rest}>
    <Heading>{title}</Heading>
    <Twitter />
  </SnsSectionContainer>
);

export { SnsSection };
