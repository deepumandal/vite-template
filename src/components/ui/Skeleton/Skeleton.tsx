import { cn } from "@Utils/className";

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("animate-pulse rounded-md bg-muted-light/20", className)}
    {...props}
  />
);

export { Skeleton };
