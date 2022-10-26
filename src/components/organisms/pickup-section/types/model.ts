import type { ComponentProps, ReactHTML } from "react";
import type {LiveEvent} from "../../../../api/prisma";

export type PickupSectionProperties = ComponentProps<ReactHTML["section"]> & {
  title: string;
  buttonText: string;
  events: ReadonlyArray<LiveEvent>;
};
