import tw from "twin.macro";
import { useMemo } from "react";
import { ButtonProperties } from "./types/model";
import { Text } from "../text";

const ButtonBox = tw.button`inline-flex items-start px-8 py-2 gap-2.5 rounded-[2rem]`;

const Button = <T extends AnyComponent>({
  children,
  boxStyles,
  textStyles,
  colorKey,
  as,
  ...rest
}: ButtonProperties<T>): JSX.Element => {
  // eslint-disable-next-line consistent-return
  const colors = useMemo(() => {
    switch (colorKey) {
      case "yellow":
        return { buttonColor: tw`bg-primary-yellow hover:bg-primary-yellow-reaction`, textColor: tw`text-text` };
      case "green":
        return { buttonColor: tw`bg-primary-green hover:bg-primary-green-reaction`, textColor: tw`text-text` };
      case "blue":
        return { buttonColor: tw`bg-primary-blue hover:bg-primary-blue-reaction`, textColor: tw`text-white` };
      case "purple":
        return { buttonColor: tw`bg-primary-purple hover:bg-primary-purple-reaction`, textColor: tw`text-white` };
      case "red":
        return { buttonColor: tw`bg-primary-red hover:bg-primary-red-reaction`, textColor: tw`text-white` };
      // no default
    }
  }, [colorKey]);
  return (
    <ButtonBox css={[colors.buttonColor, boxStyles]} as={as} tabIndex={0} {...rest}>
      <Text css={[colors.textColor, textStyles]}>{children}</Text>
    </ButtonBox>
  );
};

export { Button };
