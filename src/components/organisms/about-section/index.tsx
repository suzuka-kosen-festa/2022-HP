import type { FC } from "react";
import tw from "twin.macro";
import { sendTransitionToOutsideOfHomepage } from "../../../infrastructures/gtm";
import { AboutSectionProperties } from "../../../models";
import { Button } from "../../atoms/button";
import { Heading } from "../../atoms/heading";
import { Text } from "../../atoms/text";

const AboutSectionContainer = tw.section`space-y-[calc(200vw / 63)]`;

const AboutSection: FC<AboutSectionProperties> = ({ buttonText, children, link, title }) => (
  <AboutSectionContainer aria-label="鈴鹿高専について">
    <Heading>{title}</Heading>
    <Text>{children}</Text>
    <Button
      as="a"
      href={link}
      target="_brank"
      rel="noopener noreferrer"
      role="button"
      onClick={() => sendTransitionToOutsideOfHomepage("go_to_the_homepage_of_our_college_of_technology")}
    >
      {buttonText}
    </Button>
  </AboutSectionContainer>
);

export { AboutSection };
