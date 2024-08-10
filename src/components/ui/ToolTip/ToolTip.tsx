import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { cn } from "@Utils/className";

interface TooltipProps extends TooltipPrimitive.TooltipProps {
  Trigger?: typeof TooltipTrigger;
  Content?: typeof TooltipContent;
  Provider?: typeof TooltipProvider;
}

const Tooltip = ({ children, ...rest }: TooltipProps) => (
  <TooltipPrimitive.Root {...rest}>{children}</TooltipPrimitive.Root>
);

const TooltipProvider = TooltipPrimitive.Provider;
const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn("tooltip-content", className)}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

Tooltip.Trigger = TooltipTrigger;
Tooltip.Content = TooltipContent;
Tooltip.Provider = TooltipProvider;

export { Tooltip };
