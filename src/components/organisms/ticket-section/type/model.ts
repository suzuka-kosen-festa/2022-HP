import { ComponentProps } from "react";

export type TicketSectionProperties = ComponentProps<"section"> & {
  title: string;
  children: string;
  anchorData: ReadonlyArray<AnchorData>;
};

const Key = {
  JHS: "jhs",
  OB: "ob",
} as const;

export type AnchorData = {
  context: string;
  link: string;
  key: keyof typeof Key;
};
