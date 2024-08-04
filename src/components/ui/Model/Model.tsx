import * as RadixDialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { cn } from "@Utils/className";
import { modelVariants } from "./utils/model-variants";

interface ModelProps extends RadixDialog.DialogProps {}
interface ModelContent extends RadixDialog.DialogContentProps {
  BackgroundColor?:
    | "default"
    | "primary"
    | "secondary"
    | "destructive"
    | "outline";
}
interface ModelDescription extends RadixDialog.DialogDescriptionProps {}

const Trigger = RadixDialog.Trigger;
const ModelPortal = RadixDialog.Portal;
const ModelClose = RadixDialog.Close;

const Model = ({ children, ...rest }: ModelProps) => (
  <RadixDialog.Root {...rest}>{children}</RadixDialog.Root>
);

const ModelOverlay = forwardRef<
  ElementRef<typeof RadixDialog.Overlay>,
  ComponentPropsWithoutRef<typeof RadixDialog.Overlay>
>(({ className, ...props }, ref) => (
  <RadixDialog.Overlay
    ref={ref}
    className={cn("model-overlay", className)}
    {...props}
  />
));
ModelOverlay.displayName = RadixDialog.Overlay.displayName;

const ModelContent = forwardRef<
  ElementRef<typeof RadixDialog.Content>,
  ModelContent
>(({ className, BackgroundColor = "default", children, ...props }, ref) => (
  <ModelPortal>
    <ModelOverlay />
    <RadixDialog.Content
      ref={ref}
      className={cn(
        "model-content",
        modelVariants({ className, BackgroundColor })
      )}
      {...props}
    >
      {children}
      <RadixDialog.Close className="absolute right-8 top-8 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </RadixDialog.Close>
    </RadixDialog.Content>
  </ModelPortal>
));
ModelContent.displayName = RadixDialog.Content.displayName;

const ModelHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
ModelHeader.displayName = "ModelHeader";

const ModelFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
ModelFooter.displayName = "DialogFooter";

const ModelTitle = forwardRef<
  ElementRef<typeof RadixDialog.Title>,
  ComponentPropsWithoutRef<typeof RadixDialog.Title>
>(({ className, ...props }, ref) => (
  <RadixDialog.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
ModelTitle.displayName = RadixDialog.Title.displayName;

const ModelDescription = forwardRef<
  ElementRef<typeof RadixDialog.Description>,
  ComponentPropsWithoutRef<typeof RadixDialog.Description>
>(({ className, ...props }, ref) => (
  <RadixDialog.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
ModelDescription.displayName = RadixDialog.Description.displayName;

Model.Trigger = Trigger;
Model.Content = ModelContent;
Model.Header = ModelHeader;
Model.Footer = ModelFooter;
Model.Title = ModelTitle;
Model.Description = ModelDescription;
Model.Close = ModelClose;

export { Model };
