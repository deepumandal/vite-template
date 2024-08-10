import { cva } from "class-variance-authority";

const buttonVariants = cva("base-button", {
  variants: {
    variant: {
      default: "default-button",
      destructive: "destructive-button",
      outline: "outline-button",
      secondary: "secondary-button",
      ghost: "ghost-button",
      link: "button-link",
    },
    size: {
      default: "button-default-size",
      sm: "button-small-size",
      lg: "button-large-size",
      icon: "button-icon",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export { buttonVariants };
