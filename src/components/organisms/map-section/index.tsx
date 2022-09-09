import React from "react";
import tw from "twin.macro";
import type { MapSectionProperties } from "../../../models";
import { Heading } from "../../atoms/heading";
import { Text } from "../../atoms/text";
import { Map } from "../../molecules/map";

const MapSectionContainer = tw.section`flex flex-col space-y-[calc(200vw / 63)]`;

const MapBox = tw.div`flex flex-col space-y-[calc(200vw / 63)] lg:flex-row-reverse lg:space-x-[calc(800vw / 189)] lg:space-y-0 lg:space-x-reverse justify-end`;

const MapSection: React.FC<MapSectionProperties> = ({ center, children, label, title, zoom, ...rest }) => (
  <MapSectionContainer aria-label={"アクセス"} {...rest}>
    <Heading>{title}</Heading>
    <MapBox>
      <Text css={tw`whitespace-pre-wrap select-text`}>&#12306;{children}</Text>
      <Map center={center} title={label} zoom={zoom} />
    </MapBox>
  </MapSectionContainer>
);

export { MapSection };
