import type { FC } from "react";
import tw from "twin.macro";
import type { FooterProperties } from "../../../models";
import { AnchorText } from "../../atoms/anchor-text";

const FooterBox = tw.footer`flex flex-col justify-center items-center`;

const Footer: FC<FooterProperties> = ({ link, children, ...rest }) => (
  <FooterBox role="contentinfo" {...rest}>
    <AnchorText href={link} target="_blank" rel="noopener noreferrer" role="link" tabIndex={0}>
      {children}
    </AnchorText>
  </FooterBox>
);

export { Footer };
