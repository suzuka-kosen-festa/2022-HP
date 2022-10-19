const Stage = {
  Main: "main",
  Sub: "sub",
  Live: "live",
  Game: "game",
} as const;

export type PickupCardProperties = {
  title: string;
  description: string;
  startTime: string;
  stage: keyof typeof Stage;
};
