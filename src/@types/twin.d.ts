import "twin.macro";
import { css as cssImport } from "@emotion/react";
import type { CSSInterpolation } from "@emotion/serialize";
import styledImport from "@emotion/styled";
import type { DOMAttributes, ComponentType, ElementType } from "react";

declare global {
  namespace JSX {
    interface IntrinsticAtteibutes<T> extends DOMAttributes<T> {
      as?: string | ComponentType;
    }
  }
}

declare module "twin.macro" {
  /**
   * The styled and css imports
   */
  /* eslint-disable init-declarations */
  const styled: typeof styledImport;
  const css: typeof cssImport;
  /* eslint-enable */
}

declare module "react" {
  /**
   * The css prop
   */
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSInterpolation;
    tw?: string;
    as?: string | ComponentType;
  }

  /**
   * The inline svg css prop
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore, from the official exmaple
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSInterpolation;
    tw?: string;
    as?: string | ElementType;
  }
}
