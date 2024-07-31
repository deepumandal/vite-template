import { forwardRef } from "react";
import { AnyType } from "@AppTypes/commonTypes";
import { CommonProps } from "@Components/config";
import { cn, type ClassType } from "@Utils/className";
import { color } from "../Common/colors-blocks";

type ContainerProps = CommonProps<"container"> & {
  ScreenType: "container" | "full-screen";
  fullHeight?: boolean;
};

const Container = forwardRef<AnyType, ContainerProps>(
  (
    {
      children,
      asElement: Element,
      className,
      role,
      ScreenType = "container",
      border,
      fullHeight,
      BackgroundColor = "default",
      ...rest
    }: ContainerProps,
    ref
  ): JSX.Element => (
    <Element
      ref={ref}
      className={cn(
        "p-2 overflow-x-hidden Hide-Scroll-Track mx-auto",
        ScreenType == "container" ? "container" : "w-full",
        border && "border border-red",
        "bg-background",
        fullHeight ? "h-full min-h-screen" : "",
        color[BackgroundColor] as ClassType,
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
