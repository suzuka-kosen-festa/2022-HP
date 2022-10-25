import type { LiveEvent, LiveStage } from "../../../../api/prisma";

export type TimeTableRowProperties = {
  events: ReadonlyArray<LiveEvent>;
  intervals: ReadonlyArray<number>;
  stage: LiveStage;
};
