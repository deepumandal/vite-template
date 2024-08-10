import { ColorVariantsType, asTypographyType } from "@Components/config";
import { ClassType } from "@Utils/className";

type asElementObjectType = {
  // eslint-disable-next-line no-unused-vars
  [key in asTypographyType]: ClassType;
};

const asElementObject: asElementObjectType = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  span: "span",
  strong: "strong",
} as const;

type Variants = Exclude<ColorVariantsType, "background">;

const HeadingVariants: Record<Variants, ClassType> = {
  default: "header-default-variant",
  accent: "header-accent-variant",
  destructive: "header-destructive-variant",
  muted: "header-muted-variant",
  primary: "header-primary-variant",
  secondary: "header-secondary-variant",
} as const;

const TextVariants: Record<Variants, ClassType> = {
  default: "text-default-variant",
  accent: "text-accent-variant",
  destructive: "text-destructive-variant",
  muted: "text-muted-variant",
  primary: "text-primary-variant",
  secondary: "text-secondary-variant",
} as const;

export {
  type asElementObjectType,
  asElementObject,
  HeadingVariants,
  TextVariants,
};
