/*
 *
 * Layout component types
 *
 */

import { AriaRole, HtmlHTMLAttributes, ReactNode } from "react";
import { type BackgroundType } from "@Components/config";
import { ClassType } from "@Utils/className";
import { type AsElementType, type ElementTypeMap } from "./asElement";

interface P<T extends keyof ElementTypeMap> {
  children: ReactNode;
  className?: ClassType;
  asElement?: AsElementType<T>;
  id?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  ariaLive?: "off" | "polite" | "assertive";
  role?: AriaRole;
  border?: boolean;
  BackgroundColor?: BackgroundType;
}

type CommonProps<T extends keyof ElementTypeMap> = P<T>;

type CommonPropsExtendedHtmlAttribute<T extends keyof ElementTypeMap> = P<T> &
  HtmlHTMLAttributes<HTMLElement>;

export {
  type ContainerType,
  type FlexType,
  type BlockType,
  type GridType,

  // Element type map
  type ElementTypeMap,
  type AsElementType,
  type ElementKeysTypeUnion,
  type AllElementTypes,
} from "./asElement";
export { type CommonProps, type CommonPropsExtendedHtmlAttribute };
