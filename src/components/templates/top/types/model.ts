import type {LiveEvent} from "../../../../api/prisma";

export type TopProperties = {
  events: ReadonlyArray<LiveEvent>;
};
