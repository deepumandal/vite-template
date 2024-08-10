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
        "base-container",
        ScreenType == "container" ? "container" : "w-full",
        border && "app-border",
        fullHeight ? "full-height" : "",
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
