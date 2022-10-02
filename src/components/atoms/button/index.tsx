import tw from "twin.macro";
import { useMemo } from "react";
import { ButtonProperties } from "./type/model";
import { Text } from "../text";

const ButtonBox = tw.button`inline-flex items-start px-2 py-0.5 sm:(px-8 py-2) gap-2.5 rounded-[2rem]`;

const Button = <T extends AnyComponent>({
  children,
  boxStyles,
  textStyles,
  colorKey,
  as,
  ...rest
}: ButtonProperties<T>): JSX.Element => {
  /* eslint-disable consistent-return */
  const buttonColor = useMemo(() => {
    switch (colorKey) {
      case "yellow":
        return tw`bg-primary-yellow hover:bg-primary-yellow-reaction`;
      case "green":
        return tw`bg-primary-green hover:bg-primary-green-reaction`;
      case "blue":
        return tw`bg-primary-blue hover:bg-primary-blue-reaction`;
      case "purple":
        return tw`bg-primary-purple hover:bg-primary-purple-reaction`;
      case "red":
        return tw`bg-primary-red hover:bg-primary-red-reaction`;
      // no default
    }
  }, [colorKey]);
  const textColor = useMemo(() => {
    switch (colorKey) {
      case "yellow":
      case "green":
        return tw`text-text`;
      case "blue":
      case "purple":
      case "red":
        return tw`text-white`;
      // no default
    }
  }, [colorKey]);
  /* eslint-enable consistent-return */
  return (
    <ButtonBox css={[buttonColor, boxStyles]} as={as} tabIndex={0} {...rest}>
      <Text css={[tw`font-bold`, textColor, textStyles]}>{children}</Text>
    </ButtonBox>
  );
};

export { Button };
