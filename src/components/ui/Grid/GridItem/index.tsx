import { AriaRole, forwardRef, ReactNode } from "react";
import { type ClassType, cn } from "@Utils/className";
import { AnyType } from "../../../../@types/commonTypes";

type GridItemProps = {
  children: ReactNode;
  className?: ClassType;
  id?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  ariaLive?: "off" | "polite" | "assertive";
  role?: AriaRole;
  border?: boolean;
};

/**
 * GridItem component for individual grid items.
 *
 * @param {GridItemProps} props - The props for the GridItem component.
 * @returns {JSX.Element} The rendered grid item component.
 */
const GridItem = forwardRef<AnyType, GridItemProps>(
  (
    {
      children,
      className,
      id,
      ariaLabel,
      ariaDescribedBy,
      ariaLive,
      role = "region",
      border,
      ...rest
    }: GridItemProps,
    ref
  ): JSX.Element => (
    <div
      ref={ref}
      id={id}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-live={ariaLive}
      role={role}
      className={cn(border && "border border-red", className)}
      {...rest}
    >
      {children}
    </div>
  )
);

GridItem.displayName = "GridItem";

export { type GridItemProps };
export default GridItem;
