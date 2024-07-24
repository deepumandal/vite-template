/*
 *
 * Layout component types
 *
 */

import { AriaRole, HtmlHTMLAttributes, ReactNode } from "react";
import { ClassType } from "@Utils/className";
import { type AsElementType, type ElementTypeMap } from "./asElement";
import { BackgroundColorType } from "../theme";

interface P<T extends keyof ElementTypeMap> {
  children: ReactNode;
  className?: ClassType;
  asElement: AsElementType<T>;
  id?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  ariaLive?: "off" | "polite" | "assertive";
  role?: AriaRole;
  border?: boolean;
  backgroundColor?: BackgroundColorType;
}

type CommonProps<T extends keyof ElementTypeMap> = P<T>;

type CommonPropsExtendedHtmlAttribute<T extends keyof ElementTypeMap> = P<T> &
  HtmlHTMLAttributes<HTMLElement>;

export { type CommonProps, type CommonPropsExtendedHtmlAttribute };
