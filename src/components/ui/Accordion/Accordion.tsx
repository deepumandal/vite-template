import {
  AccordionMultipleProps as _AccordionMultipleProps,
  AccordionSingleProps as _AccordionSingleProps,
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ReactNode,
} from "react";
import { cn } from "@Utils/className";

interface AccordionMultipleProps extends _AccordionMultipleProps {}
interface AccordionSingleProps extends _AccordionSingleProps {}

type AccordionProps = AccordionMultipleProps | AccordionSingleProps;

const Accordion = ({ children, className, ...rest }: AccordionProps) => (
  <Root {...rest} className={cn("accordion-root", className)}>
    {children}
  </Root>
);

const AccordionItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => (
  <Item ref={ref} className={className} {...props} />
));
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps
  extends ComponentPropsWithoutRef<typeof Trigger> {
  icon?: ReactNode;
  rotate?: boolean | string;
}

const AccordionTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  AccordionTriggerProps
>(({ className, children, icon, rotate = true, ...props }, ref) => (
  <Header className="flex">
    <Trigger
      ref={ref}
      className={cn(
        "accordion-trigger",
        typeof rotate == "boolean"
          ? rotate
            ? "transition-all [&[data-state=open]>svg]:rotate-180"
            : ""
          : rotate,
        className
      )}
      {...props}
    >
      {children}

      {icon || (
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      )}
    </Trigger>
  </Header>
));
AccordionTrigger.displayName = Trigger.displayName;

const AccordionContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <Content
    ref={ref}
    className="overflow-hidden text-text text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </Content>
));

AccordionContent.displayName = Content.displayName;

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;
export { Accordion, type AccordionProps };
