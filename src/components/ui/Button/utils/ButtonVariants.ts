import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-heading-dark bg-primary hover:bg-primary/80",
        destructive: "bg-destructive text-heading-dark hover:bg-destructive/80",
        outline:
          "border border-input text-heading bg-transparent hover:bg-secondary",
        secondary: "bg-secondary text-heading hover:bg-secondary/80",
        ghost:
          "bg-transparent text-heading hover:bg-secondary/55 dark:hover:bg-secondary-dark/55",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-1",
        sm: "h-9 rounded-md px-2",
        lg: "h-11 rounded-md px-7",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export { buttonVariants };
