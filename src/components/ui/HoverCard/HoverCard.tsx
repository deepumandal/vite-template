import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { cn } from "@Utils/className";

interface HoverCardProps extends HoverCardPrimitive.HoverCardProps {
  Trigger?: typeof HoverCardPrimitive.Trigger;
  Content?: typeof HoverCardPrimitive.Content;
}

const HoverCard = ({ children }: HoverCardProps) => (
  <HoverCardPrimitive.Root>{children}</HoverCardPrimitive.Root>
);

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = forwardRef<
  ElementRef<typeof HoverCardPrimitive.Content>,
  ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-white p-4 text-text shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

HoverCard.Trigger = HoverCardTrigger;
HoverCard.Content = HoverCardContent;

export { HoverCard };
