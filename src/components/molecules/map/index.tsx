import type { FC } from "react";
import tw from "twin.macro";
import type { MapProperties } from "../../../models";

const GOOGLE_MAP_API_KEY =
  import.meta.env.VITE_GOOGLE_MAP_API_KEY || import.meta.env.STORYBOOK_GOOGLE_MAP_API_KEY || "";

const MapContainer = tw.figure`w-full lg:w-6/12`;

const MapWrapper = tw.div`relative w-full h-0 pt-[100%] lg:pt-[56.25%]`;

const MapFrame = tw.iframe`absolute top-0 left-0 w-full h-full`;

const Map: FC<MapProperties> = ({ center, title, zoom, ...rest }) => (
  <MapContainer>
    <MapWrapper>
      <MapFrame
        id="map"
        title={`${title}の地図`}
        role="document"
        src={`https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAP_API_KEY}&center=${center.lat}%2C${center.lng}&zoom=${zoom}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        {...rest}
      />
    </MapWrapper>
  </MapContainer>
);

export { Map };
