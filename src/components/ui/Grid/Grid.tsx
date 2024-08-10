import { forwardRef } from "react";
import { AnyType } from "@AppTypes/commonTypes";
import { CommonProps } from "@Components/config";
import { ClassType, cn } from "@Utils/className";
import {
  gridColumnsObj,
  gapObj,
  GridColumnsType,
  GapType,
} from "./utils/style-object";
import { color } from "../Common/colors-blocks";

type GridProps = CommonProps<"Grid"> & {
  columns: GridColumnsType;
  gap?: GapType;
  gridLines?: boolean;
  // aspectRatio
};

const Grid = forwardRef<AnyType, GridProps>(
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
      columns,
      gap = "0",
      border,
      gridLines,
      BackgroundColor = "default",
      ...rest
    }: GridProps,
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
        "grid",
        gridLines && "gridLines",
        gridColumnsObj[columns],
        gapObj[gap],
        border && "app-border",
        color[BackgroundColor] as ClassType,
        className
      )}
      {...rest}
    >
      {children}
    </Element>
  )
);

Grid.displayName = "Grid";
export { type GridProps, Grid };
