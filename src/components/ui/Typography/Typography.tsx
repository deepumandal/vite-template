import { ColorVariantsType, CommonProps } from "@Components/config";
import { cn } from "@Utils/className";
import {
  HeadingVariants,
  TextVariants,
  asElementObject,
} from "./utils/TypographyClasses";

type variantsType = ColorVariantsType;

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
      asElementObject[Element],
      border && "app-border",
      isHeading(Element)
        ? HeadingVariants[variants as keyof typeof HeadingVariants]
        : TextVariants[variants as keyof typeof HeadingVariants],
      className
    )}
    {...rest}
  >
    {children}
  </Element>
);

export { type TypographyProps, Typography };
