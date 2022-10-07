import type {ComponentProps, ReactHTML} from "react";
import type { PickupCardProperties } from "../../../molecules/pickup-card/types/model";

export type PickupSectionProperties = ComponentProps<ReactHTML["section"]> & {
  title: string;
  buttonText: string;
  cardData: ReadonlyArray<PickupCardProperties>
};
