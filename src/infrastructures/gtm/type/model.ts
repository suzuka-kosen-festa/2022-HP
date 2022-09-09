export type GoogleTagManagerId = `GTM-${string}`;

export type GoogleTagManagerProperties = {
  id: GoogleTagManagerId;
};

export type SendTransitionToOutsideOfHomepage =
  | "jump_to_inquiry_form"
  | "go_to_the_homepage_of_our_college_of_technology";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}
