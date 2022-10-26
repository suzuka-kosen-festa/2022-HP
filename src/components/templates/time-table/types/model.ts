import type {EventInterval, SeparationEventList} from "../../../../api/liveevent";

export type TimeTableProperties = {
  events: SeparationEventList;
  intervals: EventInterval;
};
