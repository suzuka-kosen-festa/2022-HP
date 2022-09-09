import Script from "next/script";
import type { FC } from "react";
import type { GoogleTagManagerId, GoogleTagManagerProperties, SendTransitionToOutsideOfHomepage } from "./type/model";

const isGoogleTagManagerId = (value: unknown): value is GoogleTagManagerId => {
  if (typeof value !== "string") {
    return false;
  }

  const startPosition = 0;

  const endPosition = 4;

  return value.slice(startPosition, endPosition) === "GTM-";
};

export const googleTagManagerId = (): GoogleTagManagerId => {
  if (isGoogleTagManagerId(process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID)) {
    return process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;
  }
  return "GTM-";
};

export const GoogleTagManager: FC<GoogleTagManagerProperties> = ({ id }) => (
  <Script
    id="gtm"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${id}');
      `,
    }}
  />
);

export const sendTransitionToOutsideOfHomepage = (label: SendTransitionToOutsideOfHomepage): void => {
  window.dataLayer.push({
    event: "transition_to_outside_of_homepage",
    transition_to_outside_of_homepage_trigger: label,
  });
};
