import { AriaRole, forwardRef } from "react";
import { AnyType } from "@AppTypes/commonTypes";
import { CommonProps } from "@Components/config";
import { type ClassType, cn } from "@Utils/className";
import {
  FlexDirectionType,
  FlexElementType,
  AlignContentType,
  AlignItemsType,
  JustifyContentType,
  alignContentObj,
  alignItemsObj,
  directionObj,
  justifyObj,
} from "./utils/style-object";
import { color } from "../Common/colors-blocks";

type FlexProps = CommonProps<"flex"> & {
  flexDirection?: FlexDirectionType;
  justifyContent?: JustifyContentType;
  alignItems?: AlignItemsType;
  alignContent?: AlignContentType;
};

const Flex = forwardRef<AnyType, FlexProps>(
  (
    {
      children,
      className,
      id,
      ariaLabel,
      ariaDescribedBy,
      ariaLive,
      role,
      asElement: Element = "div",
      flexDirection = "row",
      justifyContent = "flex-start",
      alignItems = "flex-start",
      alignContent = "flex-start",
      BackgroundColor = "default",
      border,
      ...rest
    }: FlexProps,
    ref
  ): JSX.Element => (
    <Element
      ref={ref}
      id={id}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-live={ariaLive}
      role={role}
      className={cn(
        "flex",
        border && "app-border",
        justifyObj[justifyContent],
        directionObj[flexDirection],
        alignItemsObj[alignItems],
        alignContentObj[alignContent],
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        color[BackgroundColor] as ClassType,

        className
      )}
      {...rest}
    >
      {children}
    </Element>
  )
);

Flex.displayName = "Flex";

export {
  Flex,
  type FlexProps,
  type AlignContentType,
  type AlignItemsType,
  type AriaRole,
  type FlexDirectionType,
  type FlexElementType,
  type JustifyContentType,
};
