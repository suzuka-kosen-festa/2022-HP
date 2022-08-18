import React from "react";
import tw from "twin.macro";
import type { FooterProperties } from "../../../models";
import { AnchorText } from "../../atoms/anchor-text";

const FooterBox = tw.footer`bg-black text-center p-2 w-screen`;

const Footer: React.FC<FooterProperties> = ({ link, children, ...rest }) => (
  <FooterBox role={"contentinfo"} {...rest}>
    <AnchorText href={link} target={"_blank"} rel={"noopener noreferrer"} role={"link"} tabIndex={0}>
      {children}
    </AnchorText>
  </FooterBox>
);

export { Footer };
