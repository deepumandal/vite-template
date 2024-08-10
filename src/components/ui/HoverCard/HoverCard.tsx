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
    className={cn("hoverCardContent", className)}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

HoverCard.Trigger = HoverCardTrigger;
HoverCard.Content = HoverCardContent;

export { HoverCard };
