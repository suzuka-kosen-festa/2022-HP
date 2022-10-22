import type { FC } from "react";
import tw, { css } from "twin.macro";
import type { MapSectionProperties } from "./types/model";
import { Heading } from "../../atoms/heading";
import { Text } from "../../atoms/text";
import { SubHeading } from "../../atoms/sub-heading";

const GOOGLE_MAP_API_KEY =
  import.meta.env.VITE_GOOGLE_MAP_API_KEY || import.meta.env.STORYBOOK_GOOGLE_MAP_API_KEY || "";

const MapSectionContainer = tw.section`flex flex-col justify-center`;

const MapBox = tw.div`flex flex-col space-x-0 space-y-4 mb-12 sm:mb-4 md:(flex-row-reverse space-x-20 space-x-reverse space-y-0)`;

const MapFrame = tw.iframe`w-full md:w-3/5 h-full`;

const AttentionContainer = tw.div`flex flex-col justify-center items-center`;

const AccessSection: FC<MapSectionProperties> = ({
  attention,
  center,
  info,
  label,
  subtitle,
  title,
  zoom,
  ...rest
}) => (
  <MapSectionContainer aria-label="鈴鹿高専へのアクセス" {...rest}>
    <Heading css={tw`text-center mb-4 sm:mb-8`} colorKey="green">
      {title}
    </Heading>
    <MapBox
      css={css`
        @media (max-width: 768px) {
          align-items: center;
          justify-content: center;
        }
      `}
    >
      <Text css={tw`whitespace-pre-wrap select-text`}>&#12306;{info}</Text>
      <MapFrame
        id="map"
        title={`${label}の地図`}
        role="document"
        src={`https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAP_API_KEY}&center=${center.lat}%2C${center.lng}&zoom=${zoom}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        css={css`
          aspect-ratio: 3 / 2;
        `}
      />
    </MapBox>
    <AttentionContainer>
      <SubHeading css={tw`mb-2 sm:mb-4`}>{subtitle}</SubHeading>
      <Text css={tw`whitespace-pre-wrap mb-4 sm:mb-8`}>{attention}</Text>
      <img
        css={css`
          aspect-ratio: 40 / 29;
        `}
        src="/statics/parking.webp"
        alt="周辺の駐車場の地図"
        width={640}
        height={464}
        loading="lazy"
      />
    </AttentionContainer>
  </MapSectionContainer>
);

export { AccessSection };
