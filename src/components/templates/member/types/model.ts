import type { MemberCardProperties } from "../../../molecules/member-card/types/model";

export type MemberProperties = {
  rikuto: MemberCardProperties,
  shoma: MemberCardProperties,
  members: ReadonlyArray<MemberCardProperties>
};
