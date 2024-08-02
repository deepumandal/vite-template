import * as RadixDialog from "@radix-ui/react-dialog";
import { forwardRef } from "react";
import { cn } from "@Utils/className";

interface ModelProps extends RadixDialog.DialogProps {}
interface ModelTrigger extends RadixDialog.DialogTriggerProps {}
interface ModelPortal extends RadixDialog.DialogPortalProps {}
interface ModelContent extends RadixDialog.DialogContentProps {}
interface ModelHeading extends RadixDialog.DialogTitleProps {}
interface ModelDescription extends RadixDialog.DialogDescriptionProps {}
interface ModelClose extends RadixDialog.DialogCloseProps {}

const Model = ({ children, ...rest }: ModelProps) => (
  <RadixDialog.Root {...rest}>{children}</RadixDialog.Root>
);

const Trigger = forwardRef<HTMLButtonElement, ModelTrigger>(
  ({ children, ...rest }: ModelTrigger, triggerRef) => (
    <RadixDialog.Trigger {...rest} ref={triggerRef} className="model">
      {children}
    </RadixDialog.Trigger>
  )
);
Trigger.displayName = "Trigger";

const Portal = forwardRef<HTMLDivElement, ModelPortal>(
  ({ children, ...rest }: ModelPortal, OverlayRef) => (
    <RadixDialog.Portal {...rest}>
      <RadixDialog.Overlay
        ref={OverlayRef}
        className="model-overlay"
        id="model-overlay
      "
      />
      {children}
    </RadixDialog.Portal>
  )
);
Portal.displayName = "Portal";

const Content = forwardRef<HTMLDivElement, ModelContent>(
  ({ children, className, ...rest }: ModelContent, contentRef) => (
    <RadixDialog.Content
      {...rest}
      ref={contentRef}
      className={cn("model-content", className)}
    >
      {children}
    </RadixDialog.Content>
  )
);
Content.displayName = "Content";

const Heading = forwardRef<HTMLHeadingElement, ModelHeading>(
  ({ children, className, ...rest }: ModelHeading, ref) => (
    <RadixDialog.Title
      {...rest}
      ref={ref}
      className={cn("model-title", className)}
    >
      {children}
    </RadixDialog.Title>
  )
);

Heading.displayName = "Heading";

const Description = forwardRef<HTMLParagraphElement, ModelDescription>(
  ({ children, className, ...rest }: ModelDescription, ref) => (
    <RadixDialog.Description
      ref={ref}
      {...rest}
      className={cn("model-description", className)}
    >
      {children}
    </RadixDialog.Description>
  )
);
Description.displayName = "Description";

const Close = forwardRef<HTMLButtonElement, ModelClose>(
  ({ children, className, ...rest }: ModelClose, ref) => (
    <RadixDialog.Close {...rest} ref={ref} className={cn(className)}>
      {children}
    </RadixDialog.Close>
  )
);
Close.displayName = "Close";

Model.Trigger = Trigger;
Model.Portal = Portal;
Model.Content = Content;
Model.Heading = Heading;
Model.Description = Description;
Model.Close = Close;
export { Model };
