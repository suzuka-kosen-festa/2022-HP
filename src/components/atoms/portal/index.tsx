import type { FC } from "react";
import { useMemo } from "react";
import { createPortal } from "react-dom";
import type { PortalProperties } from "./types/model";

const Portal: FC<PortalProperties> = ({ children, portalId }) => {
  const portalElement = useMemo<HTMLElement | null>(() => document.querySelector(portalId), [portalId]);
  if (!portalElement) {
    throw new Error(`Undefined Portal Id : ${portalId}`);
  }
  return createPortal(children, portalElement);
};

export { Portal };
