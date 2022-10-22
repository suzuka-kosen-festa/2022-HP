import type { RefObject } from "react";
import { useRef, useEffect } from "react";

const defaultEvents = ["mousedown", "touchstart"];

const useClickAway = <E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: E) => void,
  events: ReadonlyArray<string> = defaultEvents,
): void => {
  const savedCallback = useRef(onClickAway);
  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handler = (event: any) => {
      const { current: el } = ref;
      if (el && !el.contains(event.target)) {
        savedCallback.current(event);
      }
    };
    events.forEach(eventName => document.addEventListener(eventName, handler));
    return () => {
      events.forEach(eventName => document.removeEventListener(eventName, handler));
    };
  }, [events, ref]);
};

export { useClickAway };
