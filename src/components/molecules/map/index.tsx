import React from "react";
import tw from "twin.macro";
import type { MapProperties } from "../../../models";

const GOOGLE_MAP_API_KEY = process.env.GOOGLE_MAP_API_KEY || "";

const MapContainer = tw.figure`w-full lg:w-6/12`

const MapWrapper = tw.div`relative w-full h-0 pt-[100%] lg:pt-[56.25%]`

const Map: React.FC<MapProperties> = ({ center, title, zoom, ...rest }) => (
  <MapContainer>
    <MapWrapper>
      <iframe
        id={"map"}
        title={`${title}の地図`}
        role={"document"}
        src={`https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAP_API_KEY}&center=${center.lat}%2C${center.lng}&zoom=${zoom}`}
        loading={"lazy"}
        referrerPolicy={"no-referrer-when-downgrade"}
        css={tw`absolute top-0 left-0 w-full h-full`}
        allowFullScreen={true}
        {...rest}
      ></iframe>
    </MapWrapper>
  </MapContainer>
);

export { Map };
