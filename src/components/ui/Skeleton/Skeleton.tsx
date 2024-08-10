import { cn } from "@Utils/className";

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("skeleton", className)} {...props} />
);

export { Skeleton };
