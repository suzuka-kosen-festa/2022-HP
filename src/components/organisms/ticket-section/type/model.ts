import {ComponentProps} from "react";

export type TicketSectionProperties = ComponentProps<"section"> & {
  title: string;
  children: string;
  anchorData: Array<AnchorData>
};

const Key = {
  JHS: "jhs",
  OB: "ob",
} as const

type AnchorData = {
  context: string
  link: string;
  key: keyof typeof Key
}
