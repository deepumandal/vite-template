import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import { Loader } from "lucide-react";
import { forwardRef, ReactNode } from "react";
import { cn } from "@Utils/className";
import { buttonVariants } from "./utils/ButtonVariants";

type Direction = "ltr" | "rtl";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  withIcon?: ReactNode | string | undefined;
  dir?: Direction;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      loading = false,
      dir = "ltr",
      withIcon,
      className,
      variant,
      size,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn("gap-2", buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {dir == "ltr" ? (
          withIcon ? (
            withIcon
          ) : loading ? (
            <Loader className="animate-spin" />
          ) : null
        ) : null}

        {children}

        {dir == "rtl" ? (
          withIcon ? (
            withIcon
          ) : loading ? (
            <Loader className="animate-spin" />
          ) : null
        ) : null}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, type ButtonProps };
