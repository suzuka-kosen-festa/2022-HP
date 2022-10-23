import type { LiveEventWithoutId } from "../../../../api/liveevent";

export type TimeTableElementProperties = Omit<LiveEventWithoutId, "date" | "venue">;
