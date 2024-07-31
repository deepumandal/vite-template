import { FC } from "react";
import { CommonProps } from "@Components/config";
import { cn } from "@Utils/className";
import { TypographyClass } from "./utils/TypographyClasses";

type TypographyProps = CommonProps<"Typography">;

const Typography: FC<TypographyProps> = ({
  children,
  className,
  id,
  ariaLabel,
  ariaDescribedBy,
  ariaLive,
  role,
  asElement: Element,
  border,
  ...rest
}: TypographyProps): JSX.Element => (
  <Element
    id={id}
    aria-label={ariaLabel}
    aria-describedby={ariaDescribedBy}
    aria-live={ariaLive}
    role={role}
    className={cn(
      "flex",
      TypographyClass[Element as keyof TypographyProps],
      border && "border border-red",
      className
    )}
    {...rest}
  >
    {children}
  </Element>
);

export { type TypographyProps, Typography };
