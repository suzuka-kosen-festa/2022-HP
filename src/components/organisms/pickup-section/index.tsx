import type { FC } from "react";
import tw from "twin.macro";
import {Link} from "wouter";
import type { PickupSectionProperties } from "./types/model";
import {Heading} from "../../atoms/heading";
import {PickupCard} from "../../molecules/pickup-card";
import {Button} from "../../atoms/button";

const PickupSectionContainer = tw.section`flex flex-col justify-center items-center`

const CardList = tw.ul`grid mb-6 grid-cols-1 gap-2 sm:(mb-16 grid-cols-2 gap-6)`

const PickupSection: FC<PickupSectionProperties> = ({ title, buttonText, cardData, ...rest }) => (
  <PickupSectionContainer aria-label="pick up event" {...rest}>
    <Heading css={tw`mb-4 sm:mb-16`} colorKey="green">{title}</Heading>
    <CardList>
      {cardData.map((data) => (
        <PickupCard title={data.title} description={data.description} startTime={data.startTime} stage={data.stage}  key={data.startTime} />
      ))}
    </CardList>
    <Link to="/timetable">
      <Button colorKey="green" as="a" role="button">
        {buttonText}
      </Button>
    </Link>
  </PickupSectionContainer>
);

export { PickupSection };
