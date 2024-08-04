import * as RadixAvatar from "@radix-ui/react-avatar";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { cn } from "@Utils/className";

const Avatar = forwardRef<
  ElementRef<typeof RadixAvatar.Root>,
  ComponentPropsWithoutRef<typeof RadixAvatar.Root>
>(({ className, ...props }, ref) => (
  <RadixAvatar.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
Avatar.displayName = RadixAvatar.Root.displayName;

const AvatarImage = forwardRef<
  ElementRef<typeof RadixAvatar.Image>,
  ComponentPropsWithoutRef<typeof RadixAvatar.Image>
>(({ className, ...props }, ref) => (
  <RadixAvatar.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = RadixAvatar.Image.displayName;

const AvatarFallback = forwardRef<
  ElementRef<typeof RadixAvatar.Fallback>,
  ComponentPropsWithoutRef<typeof RadixAvatar.Fallback>
>(({ className, ...props }, ref) => (
  <RadixAvatar.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = RadixAvatar.Fallback.displayName;

// Define an interface for Avatar component with Image and Fallback properties
interface AvatarComponent
  extends React.ForwardRefExoticComponent<
    ComponentPropsWithoutRef<typeof RadixAvatar.Root> &
      React.RefAttributes<ElementRef<typeof RadixAvatar.Root>>
  > {
  Image: typeof AvatarImage;
  Fallback: typeof AvatarFallback;
}

// Cast Avatar to AvatarComponent
const AvatarWithComponents = Avatar as AvatarComponent;
AvatarWithComponents.Image = AvatarImage;
AvatarWithComponents.Fallback = AvatarFallback;

export { AvatarWithComponents as Avatar };
