import React from "react";
import tw from "twin.macro";
import { ButtonProperties } from "../../../models/type";

const ButtonBox = tw.button`bg-white hover:bg-button-hover flex flex-row items-start px-8 py-2 gap-2.5 rounded-8`;

const Button = <T extends AnyComponent>({
  children,
  boxStyles,
  textStyles,
  ...rest
}: ButtonProperties<T>): JSX.Element => (
  <ButtonBox css={boxStyles} {...rest}>

  </ButtonBox>
)
