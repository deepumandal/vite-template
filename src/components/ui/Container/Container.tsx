import { forwardRef } from "react";
import { AnyType } from "@AppTypes/commonTypes";
import { CommonProps } from "@Components/config";
import { cn } from "@Utils/className";

type ContainerProps = Omit<CommonProps<"container">, "BackgroundColor"> & {
  ScreenType: "container" | "full-screen";
  fullHeight?: boolean;
};

const Container = forwardRef<AnyType, ContainerProps>(
  (
    {
      children,
      asElement: Element = "main",
      className,
      role,
      ScreenType = "container",
      border,
      fullHeight,
      ...rest
    }: ContainerProps,
    ref
  ): JSX.Element => (
    <Element
      ref={ref}
      className={cn(
        "p-2 overflow-x-hidden Hide-Scroll-Track mx-auto",
        ScreenType == "container" ? "container" : "w-full",
        border && "border border-border-red",
        "bg-background",
        fullHeight ? "h-full min-h-screen" : "",
        className
      )}
      role={role}
      {...rest}
    >
      {children}
    </Element>
  )
);

Container.displayName = "Container";

export { type ContainerProps, Container };
