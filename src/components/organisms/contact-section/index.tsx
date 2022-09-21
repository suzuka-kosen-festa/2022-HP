import type { FC } from "react";
import tw from "twin.macro";
import { sendTransitionToOutsideOfHomepage } from "../../../infrastructures/gtm";
import { ContactSectionProperties } from "../../../models";
import { Button } from "../../atoms/button";
import { Heading } from "../../atoms/heading";
import { Text } from "../../atoms/text";

const ContactSectionContainer = tw.section`space-y-[calc(200vw / 63)]`;

const ContactSection: FC<ContactSectionProperties> = ({ buttonText, title, link, children, ...rest }) => (
  <ContactSectionContainer aria-label="お問い合わせ" {...rest}>
    <Heading>{title}</Heading>
    <Text>{children}</Text>
    <Button
      as="a"
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
