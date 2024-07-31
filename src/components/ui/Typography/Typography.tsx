/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-duplicate-type-constituents */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import {
  CommonProps,
  HeadingColorType,
  TextColorType,
} from "@Components/config";
import { type ClassType, cn } from "@Utils/className";
import {
  HeadingVariants,
  TextVariants,
  TypographyClass,
} from "./utils/TypographyClasses";

type variantsType = HeadingColorType | TextColorType;

type TypographyProps = Omit<CommonProps<"Typography">, "BackgroundColor"> & {
  variants?: variantsType;
};

const isHeading = (T: string) =>
  ["h1", "h2", "h3", "h4", "h5", "h6"].includes(T);

const Typography = ({
  children,
  className,
  id,
  ariaLabel,
  ariaDescribedBy,
  ariaLive,
  role,
  asElement: Element = "span",
  border,
  variants = "default",
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
      TypographyClass[Element] as ClassType,
      border && "border border-red",
      isHeading(Element) ? HeadingVariants[variants] : TextVariants[variants],
      className
    )}
    {...rest}
  >
    {children}
  </Element>
);

export { type TypographyProps, Typography };
