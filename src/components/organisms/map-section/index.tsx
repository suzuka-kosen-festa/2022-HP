import type { FC } from "react";
import tw, {css} from "twin.macro";
import type { MapSectionProperties } from "./types/model";
import {Heading} from "../../atoms/heading";

const MapSectionContainer = tw.section`flex flex-col justify-center items-center`

const MapContainer = tw.a`flex justify-center`

const Map = tw.img`w-4/5`

const MapSection: FC<MapSectionProperties> = ({ title, ...rest }) => (
  <MapSectionContainer aria-label="map" {...rest}>
    <Heading css={tw`mb-4 sm:mb-21`} colorKey="red">{title}</Heading>
    <MapContainer href="https://res.cloudinary.com/dvgtaafq5/image/upload/q_60/f_auto/v1665765554/map_vjyaf2.webp" target="_blank" rel="noopener noreferrer">
      <Map css={css`aspect-ratio: 4128 / 2915;`} src="/statics/map.webp" alt="校内マップ" width={4128} height={2915} />
    </MapContainer>
  </MapSectionContainer>
);

export { MapSection };
