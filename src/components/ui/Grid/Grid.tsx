import { FC } from "react";
import { BackgroundColor, CommonProps } from "@UI/Common";
import { type ClassType, cn } from "@Utils/className";
import {
  gridColumnsObj,
  gapObj,
  GridColumnsType,
  GapType,
} from "./utils/style-object";

type GridProps = CommonProps<"Grid"> & {
  columns: GridColumnsType;
  gap?: GapType;
  gridLines?: boolean;
  // aspectRatio
};

/**
 * Grid component for creating grid layouts with Tailwind CSS.
 *
 * @param {GridProps} props - The props for the Grid component.
 * @returns {JSX.Element} The rendered grid container component.
 */
const Grid: FC<GridProps> = ({
  children,
  className,
  id,
  ariaLabel,
  ariaDescribedBy,
  ariaLive,
  role,
  asElement: Element,
  columns,
  gap = 0,
  border,
  gridLines,
  backgroundColor: background = "primary",
  ...rest
}: GridProps): JSX.Element => (
  <Element
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
      border && "border border-red",
      BackgroundColor[background] as ClassType,
      className
    )}
    {...rest}
  >
    {children}
  </Element>
);

export { type GridProps };
export default Grid;
