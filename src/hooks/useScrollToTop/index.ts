import { useEffect } from "react";
import { useLocation } from "wouter";

const useScrollToTop = (): void => {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export { useScrollToTop };
