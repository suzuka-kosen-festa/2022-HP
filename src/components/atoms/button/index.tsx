import React from "react";
import tw from "twin.macro";
import { ButtonProperties } from "../../../models";
import { Text } from "../text";

const ButtonBox = tw.button`bg-white hover:bg-button-hover inline-block items-start px-8 py-2 gap-2.5 rounded-[2rem]`;

const Button = <T extends AnyComponent>({
  children,
  boxStyles,
  textStyles,
  as,
  ...rest
}: ButtonProperties<T>): JSX.Element => (
  <ButtonBox css={boxStyles} as={as} {...rest}>
    <Text css={[tw`text-[calc(8px + 16 * ((100vw - 378px) / 1134))] font-bold text-black`, textStyles]}>{children}</Text>
  </ButtonBox>
);

export { Button };
