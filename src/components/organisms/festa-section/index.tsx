import type { FC } from "react";
import tw from "twin.macro";
import { Link } from "wouter";
import type { FestaSectionProperties } from "./types/model";
import { Heading } from "../../atoms/heading";
import { Text } from "../../atoms/text";
import { SubHeading } from "../../atoms/sub-heading";
import { Button } from "../../atoms/button";

const FestaSectionContainer = tw.section`flex flex-col justify-center items-center`;

const FestaSection: FC<FestaSectionProperties> = ({ buttonText, children, title, subtitle, ...rest }) => (
  <FestaSectionContainer aria-label="今年のテーマ「Re:ROAD」について" {...rest}>
    <Heading css={tw`mb-4 sm:mb-8`} colorKey="red">
      {title}
    </Heading>
    <SubHeading css={tw`mb-2.5 sm:mb-4`}>{subtitle}</SubHeading>
    <Text css={tw`whitespace-pre-wrap mb-6 sm:mb-16`}>{children}</Text>
    <Link to="/member">
      <Button colorKey="red" as="a" role="button">
        {buttonText}
      </Button>
    </Link>
  </FestaSectionContainer>
);

export { FestaSection };
