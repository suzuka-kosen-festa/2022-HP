import type { FC } from "react";
import useSWR from "swr";
import { Redirect } from "wouter";
import { Top } from "../components/templates/top";
import { fetcher } from "../libs/axios";
import type { LiveEvent } from "../api/prisma";

const TopPage: FC = () => {
  const { data, error } = useSWR<ReadonlyArray<LiveEvent>>("/liveevent/near", fetcher);
  if (error) return <Redirect to="/error" />;
  if (!data) return <p>Loading...</p>;
  return <Top events={data} />;
};

export { TopPage };
