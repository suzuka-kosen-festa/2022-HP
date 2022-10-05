import type { FC } from "react";
import tw from "twin.macro";
import { sendTransitionToOutsideOfHomepage } from "../../../infrastructures/gtm";
import { AboutSectionProperties } from "./type/model";
import { Button } from "../../atoms/button";
import { Heading } from "../../atoms/heading";
import { Text } from "../../atoms/text";

const AboutSectionContainer = tw.section`flex flex-col justify-center items-center`;

const AboutSection: FC<AboutSectionProperties> = ({ buttonText, children, link, title }) => (
  <AboutSectionContainer aria-label="鈴鹿高専について">
    <Heading css={tw`mb-4 sm:mb-8`} colorKey="purple">
      {title}
    </Heading>
    <Text css={tw`mb-6 sm:mb-16`}>{children}</Text>
    <Button
      as="a"
      colorKey="purple"
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
