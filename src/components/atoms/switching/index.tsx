import type { FC } from "react";
import tw from "twin.macro";
import { useMemo } from "react";
import type { SwitchingProperties, SwitchingButtonProperties } from "./types/model";

const SwitchingBox = tw.div`flex space-x-2.25 sm:space-x-6`;

const SwitchingButtonBox = tw.button`inline-flex justify-center items-center bg-white min-h-switching rounded min-w-switching border sm:(rounded-md min-w-switching-md border-4) lg:(rounded-3xl border-5)`;

const SwitchingButton: FC<SwitchingButtonProperties> = ({ buttonData, color }) => {
  const selected = useMemo(() => {
    const query = new URLSearchParams(window.location.search);
    return buttonData.query === query.get("select");
  }, [buttonData.query]);
  /* eslint-disable consistent-return */
  const colors = useMemo(() => {
    switch (color) {
      case "yellow":
        return {
          buttonColor: tw`bg-primary-yellow hover:bg-primary-yellow-reaction`,
          borderColor: tw`border-primary-yellow hover:border-primary-yellow-reaction`,
          hoverColor: tw`hover:bg-white-reaction-yellow`,
          textColor: tw`text-primary-yellow`,
        };
      case "green":
        return {
          buttonColor: tw`bg-primary-green hover:bg-primary-green-reaction`,
          borderColor: tw`border-primary-green hover:border-primary-green-reaction`,
          hoverColor: tw`hover:bg-white-reaction-green`,
          textColor: tw`text-primary-green`,
        };
      // no default
    }
  }, [color]);
  return (
    <SwitchingButtonBox
      tabIndex={0}
      css={[colors.borderColor, selected ? colors.buttonColor : colors.hoverColor]}
      onClick={() => {
        window.location.search = `select=${buttonData.query}`;
      }}
    >
      <p css={[tw`font-zen text-text text-xs sm:text-3.5xl font-bold select-none`, !selected && colors.textColor]}>
        {buttonData.buttonText}
      </p>
    </SwitchingButtonBox>
  );
};

const Switching: FC<SwitchingProperties> = ({ buttonData, color }) => (
  <SwitchingBox>
    {buttonData.map(data => (
      <SwitchingButton buttonData={data} color={color} key={data.query} />
    ))}
  </SwitchingBox>
);

export { Switching };
