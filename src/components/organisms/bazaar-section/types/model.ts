import type {ComponentProps, ReactHTML, ReactNode} from "react";

export type BazaarSectionProperties = ComponentProps<ReactHTML["section"]> & {
  attentionTitle: string;
  attentions: ReadonlyArray<ReactNode>;
  buttonText: string;
  description: string;
  title: string;
};
