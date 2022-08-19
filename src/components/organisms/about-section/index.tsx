import React from "react";
import tw from "twin.macro";
import { AboutSectionProperties } from "../../../models";
import { Button } from "../../atoms/button";
import { Heading } from "../../atoms/heading";
import { Text } from "../../atoms/text";

const AboutSectionContainer = tw.section`flex flex-col space-y-[calc(200vw / 63)]`;

const AboutSection: React.FC<AboutSectionProperties> = ({ children, link, text, title }) => (
  <AboutSectionContainer aria-label={"鈴鹿高専について"}>
    <Heading>{title}</Heading>
    <Text>{children}</Text>
    <Button
      as="a"
      href={link}
      target={"_brank"}
      rel={"noopener noreferrer"}
      role={"link"}
      css={[tw`w-[calc((100vw / 2)] text-center`]}
    >
      {text}
    </Button>
  </AboutSectionContainer>
);

export { AboutSection };
