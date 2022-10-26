import type { FC } from "react";
import tw from "twin.macro";
import { useMemo } from "react";
import type {
  TimeTableProperties,
  TimetableHeadProperties,
  TimeTableColumnProperties,
  TimeTableAxisProperties,
} from "./types/model";
import { TimeTableRow } from "../../molecules/time-table-row";

const TimeTableHeadBox = tw.div`flex justify-center items-center px-0.5 py-2 sm:(px-1 py-4) md:(px-3 py-6) lg:(px-14 py-21.25)`;

const TimeTableHead: FC<TimetableHeadProperties> = ({ stage }) => {
  // eslint-disable-next-line consistent-return
  const memo = useMemo(() => {
    switch (stage) {
      case "main":
        return { style: tw`bg-primary-red`, text: "MAIN STAGE", caps: "MAIN" };
      case "sub":
        return { style: tw`bg-primary-blue`, text: "SUB STAGE", caps: "SUB" };
      case "live":
        return { style: tw`bg-primary-purple`, text: "LIVE STAGE", caps: "LIVE" };
      case "game":
        return { style: tw`bg-primary-green`, text: "GAME EVENT", caps: "GAME" };
      // no default
    }
  }, [stage]);
  return (
    <TimeTableHeadBox css={memo.style}>
      <h2 css={tw`font-zen font-bold text-white text-3xl hidden lg:inline select-none`}>{memo.text}</h2>
      <h2 css={tw`font-zen font-bold text-white text-base lg:hidden select-none`}>{memo.caps}</h2>
    </TimeTableHeadBox>
  );
};

const TimeTableColumn: FC<TimeTableColumnProperties> = ({ events, intervals, stage }) => (
  <section css={tw`space-y-2.25 md:space-y-6`} aria-label={stage}>
    <TimeTableHead stage={stage} />
    <TimeTableRow events={events} intervals={intervals} stage={stage} />
  </section>
);

const TimeTableAxis: FC<TimeTableAxisProperties> = ({ axes }) => (
  <section css={tw`grid grid-rows-7 h-time-table-row gap-0.5 md:(h-time-table-row-md gap-3) self-end`}>
    {axes.map(axis => (
      <time css={tw`font-zen font-bold text-gray-600 text-xss md:text-base lg:text-3xl select-none`} key={axis}>
        {axis}
      </time>
    ))}
  </section>
);

const TimeTable: FC<TimeTableProperties> = ({ events }) => (
  <section aria-label="Time table" css={tw`grid grid-cols-timetable gap-1 lg:gap-10`}>
    <TimeTableAxis axes={["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]} />
    <TimeTableColumn events={events.main} intervals={events.interval.main} stage="main" />
    <TimeTableColumn events={events.sub} intervals={events.interval.sub} stage="sub" />
    <TimeTableColumn events={events.live} intervals={events.interval.live} stage="live" />
    <TimeTableColumn events={events.game} intervals={events.interval.game} stage="game" />
  </section>
);

export { TimeTable };
