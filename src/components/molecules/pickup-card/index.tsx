import { memo } from "react";
import tw from "twin.macro";
import dayjs from "dayjs";
import type { PickupCardProperties } from "./types/model";
import { SubHeading } from "../../atoms/sub-heading";
import { Text } from "../../atoms/text";
import "dayjs/locale/ja";

const PickupCardContainer = tw.li`flex flex-col border-primary-green justify-center items-start px-13 py-3 rounded-xl border-2 space-y-2 sm:(p-8 rounded-3xl border-8 space-y-6)`;

const CardText = tw(Text)`font-bold text-base sm:text-2xl`;

// eslint-disable-next-line react/display-name
const PickupCard = memo<PickupCardProperties>(({ title, description, startTime, stage }) => {
  let stageContext;
  switch (stage) {
    case "Main":
      stageContext = "メインステージ";
      break;
    case "Sub":
      stageContext = "サブステージ";
      break;
    case "Live":
      stageContext = "ライブステージ";
      break;
    case "Game":
      stageContext = "ゲームイベント";
      break;
    // no default
  }
  return (
    <PickupCardContainer>
      <SubHeading>{title}</SubHeading>
      <CardText>{description}</CardText>
      <div css={tw`space-y-0.5`}>
        <CardText>日時: {dayjs(startTime).locale("ja").format("MM/DD (ddd) HH:mm~")}</CardText>
        <CardText>場所: {stageContext}</CardText>
      </div>
    </PickupCardContainer>
  );
});

export { PickupCard };
