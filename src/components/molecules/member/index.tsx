import type { FC } from "react";
import tw, {css} from "twin.macro";
import type { MemberProperties } from "./types/model";

const Image = tw.img`w-full h-full`

const Position = tw.p`font-zen font-bold underline text-xs sm:text-2xl`

const Name = tw.p`font-zen font-bold text-xs sm:text-2xl`

const Member: FC<MemberProperties> = ({ imagePath, name, position = "other" }) => (
  <figure>
    <Image css={css`aspect-ratio: 3 / 2;`} src={imagePath} alt={name} width={450} height={300} loading="lazy" />
    <figcaption css={[tw`flex items-center justify-center`, position !== "other" ? tw`space-x-4 sm:space-x-8` : null]}>
      {position === "other" ? null : <Position>{position === "leader" ? "LEADER" : "SUB LEADER"}</Position>}
      <Name>{name}</Name>
    </figcaption>
  </figure>
);

export { Member };
