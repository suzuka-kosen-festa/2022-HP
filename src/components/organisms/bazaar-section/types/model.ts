import type { ComponentProps, ReactHTML } from "react";

export type BazaarSectionProperties = ComponentProps<ReactHTML["section"]> & {
  attentionTitle: string;
  attentions: ReadonlyArray<string>;
  buttonText: string;
  description: string;
  title: string;
};
