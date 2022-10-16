import { useRef, useState } from "react";
import type { FC } from "react";
import tw from "twin.macro";
import { InlineIcon } from "@iconify/react";
import { Link } from "wouter";
import { usePopper } from "react-popper";
import type { HamburgerMenuItemProperties, HamburgerMenuProperties } from "./types/model";
import { useKeyPress } from "../../../hooks/useKeyPress";
import { AnchorText } from "../../atoms/anchor-text";
import { useClickAway } from "../../../hooks/useClickAway";

const HamburgerButton = tw.button`p-1 w-8 h-8 min-w-min min-h-full flex justify-center items-center rounded-lg hover:border-2 hover:border-black mb-2`;

const IconWrapper = tw.div`flex items-center justify-center flex-shrink-0 w-4 h-4 min-h-full`;

const HamburgerMenuWrapper = tw.ul`flex flex-col justify-center items-center px-4 py-2 rounded-lg bg-white max-w-min shadow-xl space-y-1 z-10`;

const MenuItem: FC<HamburgerMenuItemProperties> = ({ children, link, color }) => (
  <li role="menuitem">
    <Link to={link}>
      <AnchorText css={[tw`hover:underline`, color]}>{children}</AnchorText>
    </Link>
  </li>
);

const HamburgerMenu: FC<HamburgerMenuProperties> = ({ headerLinks }) => {
  const referenceRef = useRef<HTMLButtonElement | null>(null);
  const popperRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);
  const { styles, attributes } = usePopper(referenceRef.current, popperRef.current, {
    placement: "bottom",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 16],
        },
      },
    ],
  });
  useClickAway(popperRef, () => setShow(false));
  useKeyPress("Escape", () => setShow(false));
  return (
    <div>
      <HamburgerButton
        aria-label="menu button"
        aria-haspopup="menu"
        aria-expanded={show}
        aria-controls="hamburger-list"
        onClick={() => setShow(true)}
        ref={referenceRef}
      >
        <IconWrapper>
          <InlineIcon icon={show ? "eva:close-fill" : "ci:hamburger"} css={tw`w-full h-full text-black text-2xl`} />
        </IconWrapper>
      </HamburgerButton>
      <div ref={popperRef} style={styles} {...attributes.popper}>
        {show ? (
          <HamburgerMenuWrapper role="menu" aria-orientation="vertical" id="hamburger-list">
            {headerLinks.map(headerLink => (
              <MenuItem link={headerLink.link} color={headerLink.color} key={headerLink.name}>
                {headerLink.name}
              </MenuItem>
            ))}
          </HamburgerMenuWrapper>
        ) : null}
      </div>
    </div>
  );
};

export { HamburgerMenu };
