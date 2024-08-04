import * as RadixContextMenu from "@radix-ui/react-context-menu";
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ReactNode,
} from "react";
import { cn } from "@Utils/className";

interface ContextMenuProps extends RadixContextMenu.ContextMenuProps {
  Trigger?: typeof Trigger;
  Content?: typeof Content;
  Item?: typeof Item;
  Sub?: typeof Sub;
  SubTrigger?: typeof SubTrigger;
}

const ContextMenu = ({ children, ...rest }: ContextMenuProps) => (
  <RadixContextMenu.Root {...rest}>{children}</RadixContextMenu.Root>
);

const Trigger = ({
  className,
  ...rest
}: RadixContextMenu.ContextMenuTriggerProps) => (
  <RadixContextMenu.Trigger {...rest} className={className} />
);

const Content = forwardRef<
  ElementRef<typeof RadixContextMenu.Content>,
  ComponentPropsWithoutRef<typeof RadixContextMenu.Content>
>(({ className, ...props }, ref) => (
  <RadixContextMenu.Portal>
    <RadixContextMenu.Content
      ref={ref}
      className={cn(
        "min-w-[220px] bg-white rounded-md overflow-hidden p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]",
        className
      )}
      {...props}
    />
  </RadixContextMenu.Portal>
));
Content.displayName = RadixContextMenu.Content.displayName;

interface ItemProps {
  children: ReactNode;
}

const Item = ({ children }: ItemProps) => (
  <RadixContextMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
    {children}
  </RadixContextMenu.Item>
);

interface SubProps {
  children: ReactNode;
}

const Sub = ({ children }: SubProps) => (
  <RadixContextMenu.Sub>{children}</RadixContextMenu.Sub>
);

interface SubTriggerProps {
  children: ReactNode;
}

const SubTrigger = ({ children }: SubTriggerProps) => (
  <RadixContextMenu.SubTrigger className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:bg-violet9 data-[highlighted]:data-[state=open]:text-violet1">
    {children}
  </RadixContextMenu.SubTrigger>
);

interface SubContentProps {
  children: ReactNode;
}

const SubContent = ({ children }: SubContentProps) => (
  <RadixContextMenu.SubContent
    className="min-w-[220px] bg-white rounded-md overflow-hidden p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
    sideOffset={2}
    alignOffset={-5}
  >
    {children}
  </RadixContextMenu.SubContent>
);

const Separator = () => (
  <RadixContextMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />
);

ContextMenu.Trigger = Trigger;
ContextMenu.Content = Content;
ContextMenu.Item = Item;
ContextMenu.Sub = Sub;
ContextMenu.SubTrigger = SubTrigger;
ContextMenu.SubContent = SubContent;
ContextMenu.Separator = Separator;

export { ContextMenu };
