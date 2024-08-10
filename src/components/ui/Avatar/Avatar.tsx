import * as RadixAvatar from "@radix-ui/react-avatar";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { cn } from "@Utils/className";

const Avatar = forwardRef<
  ElementRef<typeof RadixAvatar.Root>,
  ComponentPropsWithoutRef<typeof RadixAvatar.Root>
>(({ className, ...props }, ref) => (
  <RadixAvatar.Root ref={ref} className={cn("avatar", className)} {...props} />
));
Avatar.displayName = RadixAvatar.Root.displayName;

const AvatarImage = forwardRef<
  ElementRef<typeof RadixAvatar.Image>,
  ComponentPropsWithoutRef<typeof RadixAvatar.Image>
>(({ className, ...props }, ref) => (
  <RadixAvatar.Image
    ref={ref}
    className={cn("avatar-image", className)}
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
    className={cn("avatar-fallback", className)}
    {...props}
  />
));
AvatarFallback.displayName = RadixAvatar.Fallback.displayName;

interface AvatarComponent
  extends React.ForwardRefExoticComponent<
    ComponentPropsWithoutRef<typeof RadixAvatar.Root> &
      React.RefAttributes<ElementRef<typeof RadixAvatar.Root>>
  > {
  Image: typeof AvatarImage;
  Fallback: typeof AvatarFallback;
}

const AvatarWithComponents = Avatar as AvatarComponent;
AvatarWithComponents.Image = AvatarImage;
AvatarWithComponents.Fallback = AvatarFallback;

export { AvatarWithComponents as Avatar };
