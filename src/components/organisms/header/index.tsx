import type { FC } from "react";
import tw, { css } from "twin.macro";
import { Link } from "wouter";
import type { HeaderProperties, HeaderLinkItemProperties } from "./types/model";
import { AnchorText } from "../../atoms/anchor-text";
import { HamburgerMenu } from "../../molecules/hamburger-menu";

const HeaderContainer = tw.header`fixed flex bg-center bg-cover z-30 w-full justify-center px-header-x py-header-y md:(justify-between px-header-x-md py-header-y-md)`;

const Logo = tw.img`w-max cursor-pointer`;

const LinkWrapper = tw.ul`hidden md:flex space-x-10 justify-center items-center`;

const LinkItem: FC<HeaderLinkItemProperties> = ({ children, link, color }) => (
  <li role="menuitem">
    <Link to={link}>
      <AnchorText css={[tw`md:text-base lg:text-2xl  hover:underline`, color]}>{children}</AnchorText>
    </Link>
  </li>
);

const Header: FC<HeaderProperties> = ({ headerLinks, ...rest }) => (
  <HeaderContainer
    css={css`
      background-image: url("/statics/header.webp");
      aspect-ratio: 12 / 1;
    `}
    {...rest}
  >
    <Link to="/">
      <Logo src="/statics/logo.png" alt="第57回鈴鹿高専祭、Re:ROADのロゴ" width={948} height={197} loading="eager" />
    </Link>
    <LinkWrapper>
      {headerLinks.map(headerLink => (
        <LinkItem link={headerLink.link} color={headerLink.color} key={headerLink.name}>
          {headerLink.name}
        </LinkItem>
      ))}
    </LinkWrapper>
    <HamburgerMenu menuLinks={headerLinks} />
  </HeaderContainer>
);

export { Header };
