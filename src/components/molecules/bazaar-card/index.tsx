import type { FC } from "react";
import tw, {css} from "twin.macro";
import type { BazaarCardProperties, ChipProperties } from "./types/model";

const ChipBox = tw.div`inline-flex items-start bg-primary-purple px-4 py-1 rounded-2xl`

const ChipText = tw.p`font-zen text-white font-bold text-xs sm:text-base select-none`

const BazaarCardBox = tw.li`inline-flex flex-col xs:w-75 border border-border-primary rounded-2xl overflow-hidden`

const BazaarCardImage = tw.img`h-full`

const BazaarCardContent = tw.div`inline-flex flex-col items-start px-2 py-2 space-y-2 sm:(py-4 space-y-4)`

const BazaarCardHeading = tw.h2`font-zen font-bold text-text text-base sm:text-2xl select-none`

const BazaarCardDescription = tw.p`font-zen font-bold text-gray-700 text-xs sm:text-base select-none`

const BazaarCardPrices = tw.ul`flex space-x-2 sm:space-x-3`

const BazaarCardPrice = tw.p`font-zen font-bold text-text text-xs sm:text-base select-none`

const Chip: FC<ChipProperties> = ({group}) => (
  <ChipBox>
    <ChipText>{group}</ChipText>
  </ChipBox>
)

const BazaarCard: FC<BazaarCardProperties> = ({ name, description, image, prices, group }) => (
  <BazaarCardBox>
    <BazaarCardImage css={css`aspect-ratio: 3 / 2;`} src={image} alt="バザーに関するイメージ画像" width={300} height={200} />
    <BazaarCardContent>
      <Chip group={group} />
      <BazaarCardHeading>{name}</BazaarCardHeading>
      <BazaarCardDescription css={css`width: fit-content;`}>{description}</BazaarCardDescription>
      <BazaarCardPrices>
        {prices.map((price) => (
          <li key={price}>
            <BazaarCardPrice>{price}</BazaarCardPrice>
          </li>
        ))}
      </BazaarCardPrices>
    </BazaarCardContent>
  </BazaarCardBox>
);

export { BazaarCard };
