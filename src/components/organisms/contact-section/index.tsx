import type { FC } from "react";
import tw from "twin.macro";
import { sendTransitionToOutsideOfHomepage } from "../../../infrastructures/gtm";
import { ContactSectionProperties } from "./types/model";
import { Button } from "../../atoms/button";
import { Heading } from "../../atoms/heading";
import { Text } from "../../atoms/text";

const ContactSectionContainer = tw.section`flex flex-col justify-center items-center`;

const ContactSection: FC<ContactSectionProperties> = ({ buttonText, title, link, children, ...rest }) => (
  <ContactSectionContainer aria-label="お問い合わせ" {...rest}>
    <Heading css={tw`mb-4 sm:mb-8`} colorKey="yellow">
      {title}
    </Heading>
    <Text css={tw`mb-8 sm:mb-16`}>{children}</Text>
    <Button
      as="a"
      colorKey="yellow"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      role="button"
      onClick={() => sendTransitionToOutsideOfHomepage("jump_to_inquiry_form")}
    >
      {buttonText}
    </Button>
  </ContactSectionContainer>
);

export { ContactSection };
