import type { SponsorCompany } from "../../../../api/prisma";

export type SponsorProperties = {
  sponsors: ReadonlyArray<SponsorCompany>;
};
