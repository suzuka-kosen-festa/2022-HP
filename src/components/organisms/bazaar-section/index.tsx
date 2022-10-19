import type { FC } from "react";
import tw from "twin.macro";
import { Link } from "wouter";
import type { BazaarSectionProperties } from "./types/model";
import { Caution } from "../../molecules/caution";
import { Heading } from "../../atoms/heading";
import { Text } from "../../atoms/text";
import { Button } from "../../atoms/button";

const BazaarSectionContainer = tw.section`flex flex-col justify-center items-center`;

const BazaarSection: FC<BazaarSectionProperties> = ({
  attentionTitle,
  attentions,
  buttonText,
  description,
  title,
  ...rest
}) => (
  <BazaarSectionContainer aria-label="bazaar" {...rest}>
    <Heading css={tw`mb-4 sm:mb-6`} colorKey="purple">
      {title}
    </Heading>
    <Caution title={attentionTitle} sentence={attentions} css={tw`mb-4 sm:mb-8`} />
    <Text css={tw`whitespace-pre-wrap mb-6 sm:mb-16`}>{description}</Text>
    <Link to="/bazaar">
      <Button colorKey="purple" as="a" role="button">
        {buttonText}
      </Button>
    </Link>
  </BazaarSectionContainer>
);

export { BazaarSection };
