import type { FC } from "react";
import useSWR from "swr";
import { Redirect } from "wouter";
import { TimeTable } from "../components/templates/time-table";
import { fetcher } from "../libs/axios";
import type {SeparationEventList } from "../api/liveevent"

const TimeTablePage: FC = () => {
  const query = new URLSearchParams(window.location.search);
  const isThirty = query.get("select") === "30";
  const { data, error } = useSWR<SeparationEventList>(isThirty ? "/liveevent/2022-10-30" : "/liveevent/2022-10-31", fetcher)
  if (error) return <Redirect to="/error" />;
  if (!data) return <p>Loading...</p>;
  return <TimeTable events={data} />
}

export { TimeTablePage }
