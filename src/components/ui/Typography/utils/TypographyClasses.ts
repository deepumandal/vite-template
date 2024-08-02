import { ColorVariantsType, asTypographyType } from "@Components/config";
import { ClassType } from "@Utils/className";

type asElementObjectType = {
  // eslint-disable-next-line no-unused-vars
  [key in asTypographyType]: ClassType;
};
const asElementObject: asElementObjectType = {
  h1: "text-4xl font-extrabold leading-tight tracking-tight",
  h2: "text-3xl font-bold leading-snug tracking-tight",
  h3: "text-2xl font-semibold leading-normal tracking-tight",
  h4: "text-xl font-medium leading-normal tracking-tight",
  h5: "text-lg font-medium leading-snug tracking-tight",
  h6: "text-base font-medium leading-snug tracking-tight",
  p: "text-base font-normal leading-normal tracking-normal",
  span: "text-base font-normal leading-normal tracking-normal",
  strong: "text-base font-semibold leading-normal tracking-normal",
} as const;

const HeadingVariants: Record<ColorVariantsType, ClassType> = {
  default: "text-heading",
  accent: "text-accent",
  destructive: "text-destructive",
  muted: "text-muted",
  primary: "text-primary",
  secondary: "text-secondary",
} as const;

const TextVariants: Record<ColorVariantsType, ClassType> = {
  default: "text-text",
  accent: "text-accent",
  destructive: "text-destructive",
  muted: "text-muted",
  primary: "text-primary",
  secondary: "text-secondary",
} as const;

export {
  type asElementObjectType,
  asElementObject,
  HeadingVariants,
  TextVariants,
};
