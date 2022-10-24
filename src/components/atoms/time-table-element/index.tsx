import type { FC } from "react";
import tw from "twin.macro";
import React, { useMemo, useRef, useState } from "react";
import dayjs from "dayjs";
import type { TimeTableElementProperties } from "./types/model";
import { useKeyPress } from "../../../hooks/useKeyPress";
import { useClickAway } from "../../../hooks/useClickAway";
import { Portal } from "../portal";
import Icon from "../icon";

const TimeTableElementBox = tw.div`flex flex-col cursor-pointer px-1 py-0.5 sm:(px-6 py-4)`;

const Overlay = tw.div`flex fixed justify-center items-center inset-0 z-50 overflow-y-auto bg-gray-300 bg-opacity-70`;

const ModalWrapper = tw.section`flex items-center bg-white border-primary-yellow px-5.5 py-6 border-3 rounded-3xl w-72 md:(px-21 py-16 border-5 rounded-5xl w-180)`;

const ModalBox = tw.div`relative w-full max-w-lg mx-auto text-center space-y-4 space-x-4`;

const TimeTableElement: FC<TimeTableElementProperties> = ({ event }) => {
  const [isShow, setShow] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line consistent-return
  const backgroundColor = useMemo(() => {
    switch (event.stage) {
      case "main":
        return tw`bg-primary-red`;
      case "sub":
        return tw`bg-primary-blue`;
      case "live":
        return tw`bg-primary-purple`;
      case "game":
        return tw`bg-primary-green`;
      // no default
    }
  }, [event.stage]);
  const times = useMemo(() => {
    const start = dayjs(event.start_time).format("HH:mm");
    const end = dayjs(event.end_time).format("HH:mm");
    return { start, end };
  }, [event.end_time, event.start_time]);
  useClickAway(ref, () => setShow(false));
  useKeyPress("Escape", () => setShow(false));
  return (
    <>
      <TimeTableElementBox css={backgroundColor} onClick={() => setShow(true)}>
        <time css={tw`font-zen font-bold text-white text-xss md:text-xl select-none`}>
          <span css={tw`after:content-["~"]`}>{times.start}</span>
          {times.end}
        </time>
        <p css={tw`font-zen font-bold text-white text-xss md:text-xl select-none`}>{event.title}</p>
      </TimeTableElementBox>
      <Portal portalId="#modal">
        {isShow ? (
          <Overlay>
            <ModalWrapper ref={ref}>
              <ModalBox>
                <Icon
                  as="button"
                  icon="charm:cross"
                  css={tw`absolute -top-14 right-0 md:(-top-20 -right-12) text-primary-yellow`}
                  tabIndex={0}
                  onClick={() => setShow(false)}
                />
                <h2 css={tw`font-zen font-medium text-text text-base md:text-3.5xl select-none`}>{event.title}</h2>
                <p css={tw`font-zen font-medium text-text text-xs md:text-2xl select-none`}>{event.descriptions}</p>
              </ModalBox>
            </ModalWrapper>
          </Overlay>
        ) : null}
      </Portal>
    </>
  );
};

export { TimeTableElement };
