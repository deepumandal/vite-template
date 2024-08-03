import { cva } from "class-variance-authority";

const modelVariants = cva("", {
  variants: {
    BackgroundColor: {
      primary: "text-heading bg-primary",
      destructive: "bg-destructive text-heading",
      outline: "border border-input text-heading bg-background text-heading",
      secondary: "bg-secondary text-heading hover:bg-secondary/80",
      default: "bg-background text-heading",
    },
  },
  defaultVariants: {
    BackgroundColor: "default",
  },
});
export { modelVariants };
