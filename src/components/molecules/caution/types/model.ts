import type {ComponentProps, ReactHTML, ReactNode} from "react";

export type CautionProperties = ComponentProps<ReactHTML["section"]> & {
  title: string;
  sentence: ReadonlyArray<ReactNode> | ReadonlyArray<string>;
};
