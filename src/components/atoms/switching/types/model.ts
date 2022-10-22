import type { ColorVariant } from "../../../../styles/type/model";

type ButtonContent = {
  buttonText: string;
  query: string;
};

type Color = Extract<ColorVariant, "yellow" | "green">;

export type SwitchingButtonProperties = {
  buttonData: ButtonContent;
  color: Color
}

export type SwitchingProperties = {
  buttonData: ReadonlyArray<ButtonContent>;
  color: Color
};
