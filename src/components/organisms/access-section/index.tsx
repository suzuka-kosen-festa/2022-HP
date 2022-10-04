import type { FC } from "react";
import tw, { css } from "twin.macro";
import type { MapSectionProperties } from "./type/model";
import { Heading } from "../../atoms/heading";
import { Text } from "../../atoms/text";

const GOOGLE_MAP_API_KEY =
  import.meta.env.VITE_GOOGLE_MAP_API_KEY || import.meta.env.STORYBOOK_GOOGLE_MAP_API_KEY || "";

const MapSectionContainer = tw.section`flex flex-col justify-center`;

const MapBox = tw.div`flex flex-col space-x-0 space-y-4 md:(flex-row-reverse space-x-20 space-x-reverse space-y-0)`;

const MapFrame = tw.iframe`w-full h-full`;

const AccessSection: FC<MapSectionProperties> = ({ center, children, label, title, zoom, ...rest }) => (
  <MapSectionContainer aria-label="鈴鹿高専へのアクセス" {...rest}>
    <Heading css={tw`text-center mb-4 sm:mb-8`} colorKey="green">
      {title}
    </Heading>
    <MapBox>
      <Text css={tw`whitespace-pre select-text`}>&#12306;{children}</Text>
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
  </MapSectionContainer>
);

export { AccessSection };
