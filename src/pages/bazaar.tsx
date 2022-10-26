import type { FC } from "react";
import useSWR from "swr";
import { Redirect } from "wouter";
import { Bazaar } from "../components/templates/bazaar";
import { fetcher } from "../libs/axios";
import type { BazaarWithId } from "../api/bazaar";

const BazaarPage: FC = () => {
  const query = new URLSearchParams(window.location.search);
  const isRecreation = query.get("select") === "recreation";
  const { data, error } = useSWR<ReadonlyArray<BazaarWithId>>(
    isRecreation ? "/bazaar/data/recreation" : "/bazaar/data/eating",
    fetcher,
  );
  if (!data) return <p>Loading...</p>;
  if (error) return <Redirect to="/error" />;
  return <Bazaar bazaars={data} />;
};

export { BazaarPage };
