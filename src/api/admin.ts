import type { Guest } from "./prisma";

export type ExportStudentGuest = {
  email: string;
  guest: ReadonlyArray<Pick<Guest, "name" | "guestId">> | readonly [];
};

export type ExportJhsGuest = {
  email: string;
  jhsId: string;
  parents: ReadonlyArray<Pick<Guest, "name" | "guestId">> | readonly [];
};

export type ExportOb = {
  email: string;
  obId: string;
};

export type ExportSponsor = {
  email: string;
  sponsorId: string;
};
