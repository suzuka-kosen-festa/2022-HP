const Position = {
  leader: "LEADER",
  sub: "SUB LEADER",
  other: ""
}

export type MemberProperties = {
  imagePath: string;
  name: string;
  position?: keyof typeof Position
};
