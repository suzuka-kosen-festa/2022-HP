import type { Bazaar, BazaarPrices } from "./prisma";

export type BazaarWithoutId = Omit<Bazaar, "id"> & {
  prices: ReadonlyArray<BazaarPrices>;
};

export type BazaarWithId = Bazaar & {
  prices: ReadonlyArray<BazaarPrices>;
};
