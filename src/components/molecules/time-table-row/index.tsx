import type { FC } from "react";
import { useMemo } from "react";
import dayjs from "dayjs";
import tw, { css } from "twin.macro";
import type { TimeTableRowProperties } from "./types/model";
import { TimeTableElement } from "../../atoms/time-table-element";
import { LiveEvent } from "../../../api/prisma";

const TimeTableRowBox = tw.ul`grid h-time-table-row gap-0.5 md:(h-time-table-row-md gap-3)`;

const TimeTableRow: FC<TimeTableRowProperties> = ({ events, intervals, stage }) => {
  const templateRows = useMemo(() => intervals.map(interval => `${interval}fr`).join(" "), [intervals]);
  const data = useMemo(() => {
    const arr: Array<LiveEvent | "gap"> = [];
    events.forEach((event, i, a) => {
      if (i === 0) {
        return dayjs(event.start_time).format("HH:mm") === "09:00" ? arr.push(event) : arr.push("gap", event);
      }
      if (i === a.length - 1) {
        return dayjs(event.end_time).format("HH:mm") === "16:00" ? arr.push(event) : arr.push("gap", event);
      }
      return dayjs(a[i - 1].end_time).format("HH:mm") === dayjs(a[i].start_time).format("HH:mm")
        ? arr.push(event)
        : arr.push("gap", event);
    });
    return arr;
  }, [events]);
  // eslint-disable-next-line consistent-return
  const color = useMemo(() => {
    switch (stage) {
      case "main":
        return tw`border-primary-red bg-red-50 border md:border-5`;
      case "sub":
        return tw`border-primary-blue bg-blue-50 border md:border-5`;
      case "live":
        return tw`border-primary-purple bg-purple-50 border md:border-5`;
      case "game":
        return tw`border-primary-green bg-green-50 border md:border-5`;
      // no default
    }
  }, [stage]);
  return (
    <TimeTableRowBox
      css={[
        css`
          grid-template-rows: ${templateRows};
        `,
        color,
      ]}
    >
      {data.map((event, i) =>
        // eslint-disable-next-line react/no-array-index-key
        event === "gap" ? <div key={i} /> : <TimeTableElement event={event} key={i} />,
      )}
    </TimeTableRowBox>
  );
};

export { TimeTableRow };
