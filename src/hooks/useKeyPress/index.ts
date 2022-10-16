import { useRef, useEffect } from "react";

const useKeyPress = (key: string, handler: () => void): void => {
  const savedHandler = useRef(handler);
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const onKeyup = (event: KeyboardEvent) => {
      if (event.key === key) {
        savedHandler.current();
      }
    };
    document.addEventListener("keyup", onKeyup);
    return () => document.removeEventListener("keyup", onKeyup);
  }, [key]);
};

export { useKeyPress };
