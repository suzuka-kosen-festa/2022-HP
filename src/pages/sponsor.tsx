import type { FC } from "react";
import useSWR from "swr";
import { Redirect } from "wouter";
import { Sponsor } from "../components/templates/sponsor";
import { fetcher } from "../libs/axios";
import type { SponsorCompany } from "../api/prisma";

const SponsorPage: FC = () => {
  const { data, error } = useSWR<ReadonlyArray<SponsorCompany>>("/sponsorcompany", fetcher);
  if (error) return <Redirect to="/error" />;
  if (!data) return <p>Loading...</p>;
  return <Sponsor sponsors={data} />;
};

export { SponsorPage };
