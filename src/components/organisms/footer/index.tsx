import type { FC } from "react";
import tw from "twin.macro";
import type { FooterProperties } from "./type/model";
import { AnchorText } from "../../atoms/anchor-text";

const FooterBox = tw.footer`flex flex-col justify-center py-6`;

const Footer: FC<FooterProperties> = ({ link, children, ...rest }) => (
  <FooterBox role="contentinfo" {...rest}>
    <AnchorText href={link} target="_blank" rel="noopener noreferrer" role="link" tabIndex={0} css={tw`text-center`}>
      &copy; {children}
    </AnchorText>
  </FooterBox>
);

export { Footer };
