import tw from "twin.macro";
import type { FC } from "react";
import { CautionProperties } from "./type/model";
import Icon from "../../atoms/icon";
import { SubHeading } from "../../atoms/sub-heading";

const CautionBox = tw.section`flex flex-col justify-center items-center border-2 pt-2 pb-4 px-4.5 sm:(border-4 pt-4 pb-8 px-9) border-caution`;

const CautionTitle = tw.div`flex space-x-1 mb-2 sm:(space-x-2 mb-4)`;

const Caution: FC<CautionProperties> = ({ title, sentence }) => (
  <CautionBox aria-label="alert">
    <CautionTitle>
      <Icon icon="ant-design:warning-filled" iconStyles={tw`text-caution`} />
      <SubHeading css={tw`flex self-center`}>{title}</SubHeading>
    </CautionTitle>
    <ul css={tw`list-disc list-outside`}>
      {sentence.map(value => (
        <li css={tw`ml-4.5`} key={`${value}`}>
          {value}
        </li>
      ))}
    </ul>
  </CautionBox>
);

export { Caution };
