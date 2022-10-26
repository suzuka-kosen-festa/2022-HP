import type { BazaarWithId } from "../../../../api/bazaar";

export type ChipProperties = Pick<BazaarWithId, "group">;

export type BazaarCardProperties = {
  bazaar: BazaarWithId;
};
