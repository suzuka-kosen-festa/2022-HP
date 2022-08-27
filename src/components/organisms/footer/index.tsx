import React from "react";
import tw from "twin.macro";
import type { FooterProperties } from "../../../models";
import { AnchorText } from "../../atoms/anchor-text";

const FooterBox = tw.footer`bg-black text-center leading-[calc(12px + 4 * ((100vw - 378px) / 1134))] py-[calc(100vw / 63)]`;

const Footer: React.FC<FooterProperties> = ({ link, children, ...rest }) => (
  <FooterBox role={"contentinfo"} {...rest}>
    <AnchorText href={link} target={"_blank"} rel={"noopener noreferrer"} role={"link"} tabIndex={0}>
      {children}
    </AnchorText>
  </FooterBox>
);

export { Footer };
