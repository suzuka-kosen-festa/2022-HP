import type { ComponentProps, ReactHTML } from "react";
import type { IconifyIcon } from "@iconify/react";
import type { CSSInterpolation } from "@emotion/serialize";

export type SnsSectionProperties = ComponentProps<ReactHTML["section"]> & {
  title: string;
  children: string;
  socialData: Array<SocialData>;
};

const Key = {
  Twitter: "twitter",
  Instagram: "instagram",
  YouTube: "youtube",
  Spotify: "spotify",
} as const;

type SocialData = {
  icon: string | IconifyIcon;
  key: keyof typeof Key;
  link: string;
  style: CSSInterpolation;
};
