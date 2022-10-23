import type { LiveEvent, LiveStage } from "./prisma";

export type SeparationEventList = {
  [key in LiveStage]: ReadonlyArray<LiveEvent> | readonly [];
};

export type LiveEventWithoutId = Omit<LiveEvent, "id">;
