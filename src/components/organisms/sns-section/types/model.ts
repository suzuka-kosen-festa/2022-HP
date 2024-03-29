import type { ComponentProps, ReactHTML } from "react";
import type { IconifyIcon } from "@iconify/react";
import type { CSSInterpolation } from "@emotion/serialize";

export type SnsSectionProperties = ComponentProps<ReactHTML["section"]> & {
  title: string;
  children: string;
  socialData: ReadonlyArray<SocialData>;
};

const Key = {
  Twitter: "twitter",
  Instagram: "instagram",
  YouTube: "youtube",
  Spotify: "spotify",
} as const;

export type SocialData = {
  icon: string | IconifyIcon;
  key: keyof typeof Key;
  link: string;
  style: CSSInterpolation;
};
