import { ComponentProps } from "react";

export type TicketSectionProperties = ComponentProps<"section"> & {
  title: string;
  children: string;
};
