const Position = {
  leader: "LEADER",
  sub: "SUB LEADER",
  other: "",
};

export type MemberCardProperties = {
  imagePath: string;
  name: string;
  position?: keyof typeof Position;
};
