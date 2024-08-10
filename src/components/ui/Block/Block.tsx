import { forwardRef } from "react";
import { AnyType } from "@AppTypes/commonTypes";
import { CommonProps } from "@Components/config";
import { cn } from "@Utils/className";

type BlockProps = CommonProps<"block"> & object;

const Block = forwardRef<AnyType, BlockProps>(
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
      border,
      ...rest
    }: BlockProps,
    ref
  ): JSX.Element => (
    <Element
      ref={ref}
      id={id}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-live={ariaLive}
      role={role}
      className={cn(border && "app-border", className)}
      {...rest}
    >
      {children}
    </Element>
  )
);

Block.displayName = "Block";
export { type BlockProps, Block };
