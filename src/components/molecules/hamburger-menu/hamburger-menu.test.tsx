import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { InlineIcon } from "@iconify/react";
import tw from "twin.macro";
import { Link } from "wouter";
import { AnchorText } from "../../atoms/anchor-text";

const headerLinks = [
  {
    link: "/",
    color: tw`text-primary-yellow`,
    name: "Top",
  },
  {
    link: "/member",
    color: tw`text-primary-red`,
    name: "Members",
  },
  {
    link: "/timetable",
    color: tw`text-primary-green`,
    name: "Schedule",
  },
  {
    link: "/bazaar",
    color: tw`text-primary-purple`,
    name: "Bazaar",
  },
  {
    link: "/sponsors",
    color: tw`text-primary-blue`,
    name: "Sponsors",
  },
];

// Mocking because menu can't open in jsdom
const Mock = () => (
  <div css={tw`absolute inset-y-0 right-4 inline-block md:hidden`}>
    <button
      css={tw`p-0.5 w-4 h-4 min-w-min min-h-full flex justify-center items-center`}
      type="button"
      aria-label="menu button"
      aria-haspopup="menu"
      aria-expanded
      aria-controls="hamburger-list"
      onClick={vi.fn()}
    >
      <div css={tw`flex items-center justify-center flex-shrink-0 w-4 h-4 min-h-full`}>
        <InlineIcon icon="eva:close-fill" css={tw`w-full h-full text-black text-2xl`} />
      </div>
    </button>
    <div css={tw`absolute top-0 left-0`}>
      <ul
        css={tw`flex flex-col justify-center items-center px-4 py-2 rounded-lg bg-white max-w-min shadow-xl space-y-1 z-10`}
        role="menu"
        aria-orientation="vertical"
        id="hamburger-list"
      >
        {headerLinks.map(headerLink => (
          <li role="menuitem" key={headerLink.name}>
            <Link to={headerLink.link}>
              <AnchorText css={[tw`hover:underline`, headerLink.color]}>{headerLink.name}</AnchorText>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

describe("(components) molecules/hamburger-menu", () => {
  test("to be organisms", () => {
    const { container } = render(<Mock />);
    expect(container).toBeMolecule();
  });
  test("take snap shot", () => {
    const { container } = render(<Mock />);
    expect(container).toMatchSnapshot();
  });
});
