import React from "react";
import tw from "twin.macro";
import { AboutSectionProperties } from "../../../models";
import { Button } from "../../atoms/button";
import { Heading } from "../../atoms/heading";
import { Text } from "../../atoms/text";

const AboutSectionContainer = tw.section`flex-col  space-y-[calc(100vw / 63)]`;

const AboutSection: React.FC<AboutSectionProperties> = ({ buttonText, children, link, title }) => (
  <AboutSectionContainer aria-label={"鈴鹿高専について"}>
    <Heading>{title}</Heading>
    <Text>{children}</Text>
    <Button as="a" href={link} target={"_brank"} rel={"noopener noreferrer"} role={"link"}>
      {buttonText}
    </Button>
  </AboutSectionContainer>
);

export { AboutSection };
