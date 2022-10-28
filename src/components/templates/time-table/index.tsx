import type { FC } from "react";
import tw from "twin.macro";
import { Link } from "wouter";
import type { TimeTableProperties } from "./types/model";
import { Title } from "../../molecules/title";
import { Switching } from "../../atoms/switching";
import { TimeTable as TT } from "../../organisms/time-table";
import { Button } from "../../atoms/button";

const Main = tw.main`pt-1 pb-8 sm:(pt-6 pb-40)`;

const TimetablePageBox = tw.div`flex flex-col justify-center items-center space-y-6 xl:space-y-32 3xl:space-y-48`;

const buttonData = [
  {
    buttonText: "10.30",
    query: "30",
  },
  {
    buttonText: "10.31",
    query: "31",
  },
];

const TimeTable: FC<TimeTableProperties> = ({ events }) => (
  <Main aria-label="Time table">
    <Title colorKey="yellow">Time schedule</Title>
    <TimetablePageBox>
      <Switching buttonData={buttonData} color="yellow" />
      <TT events={events} css={tw`mb-8 sm:mb-40`} />
      <Link to="/">
        <Button textStyles={tw`text-white`} colorKey="yellow" as="a" role="button">
          トップページに戻る
        </Button>
      </Link>
    </TimetablePageBox>
  </Main>
);

export { TimeTable };
