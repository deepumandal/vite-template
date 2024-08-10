import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@Utils/className";

const badgeVariants = cva("base-badge", {
  variants: {
    variant: {
      default: "default-badge",
      secondary: "secondary-badge",
      destructive: "destructive-badge",
      outline: "outline-badge",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => (
  <div className={cn(badgeVariants({ variant }), className)} {...props} />
);

export { Badge };
