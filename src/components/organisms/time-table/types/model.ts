import type { SeparationEventList, EventInterval } from "../../../../api/liveevent";
import type { LiveEvent, LiveStage } from "../../../../api/prisma";

export type TimetableHeadProperties = {
  stage: LiveStage;
};

export type TimeTableColumnProperties = {
  events: ReadonlyArray<LiveEvent>;
  intervals: ReadonlyArray<number>;
  stage: LiveStage;
};

export type TimeTableAxisProperties = {
  axes: ReadonlyArray<string>;
};

export type TimeTableProperties = {
  events: SeparationEventList;
  intervals: EventInterval;
};
