import type { ReactNode } from "react";

export type CautionProperties = {
  title: string;
  sentence: Array<ReactNode> | Array<string>;
};
