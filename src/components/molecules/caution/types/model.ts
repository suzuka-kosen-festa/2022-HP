import type { ReactNode } from "react";

export type CautionProperties = {
  title: string;
  sentence: ReadonlyArray<ReactNode> | ReadonlyArray<string>;
};
