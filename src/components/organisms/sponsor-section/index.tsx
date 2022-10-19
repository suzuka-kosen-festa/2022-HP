import type { FC } from "react";
import tw from "twin.macro";
import { Link } from "wouter";
import { SponsorSectionProperties } from "./types/model";
import { Heading } from "../../atoms/heading";
import { Text } from "../../atoms/text";
import { Button } from "../../atoms/button";

const SponsorSectionContainer = tw.section`flex flex-col justify-center items-center`;

const SponsorSection: FC<SponsorSectionProperties> = ({ children, buttonText, title, ...rest }) => (
  <SponsorSectionContainer aria-label="sponsors" {...rest}>
    <Heading css={tw`mb-4 sm:mb-8`} colorKey="blue">
      {title}
    </Heading>
    <Text css={tw`whitespace-pre-wrap mb-6 sm:mb-16`}>{children}</Text>
    <Link to="/sponsors">
      <Button colorKey="blue" as="a" role="button">
        {buttonText}
      </Button>
    </Link>
  </SponsorSectionContainer>
);

export { SponsorSection };
