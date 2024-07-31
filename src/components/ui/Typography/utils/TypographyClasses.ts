import { HeadingColorType, TextColorType } from "@Components/config";
import { ClassType } from "@Utils/className";

type TypographyClassType = {
  [key: string]: ClassType;
};
const TypographyClass: TypographyClassType = {
  h1: "text-4xl font-extrabold leading-tight tracking-tight",
  h2: "text-3xl font-bold leading-snug tracking-tight",
  h3: "text-2xl font-semibold leading-normal tracking-tight",
  h4: "text-xl font-medium leading-normal tracking-tight",
  h5: "text-lg font-medium leading-snug tracking-tight",
  h6: "text-base font-medium leading-snug tracking-tight",
} as const;

const HeadingVariants: Record<HeadingColorType, ClassType> = {
  default: "text-heading",
  accent: "text-accent",
  destructive: "text-destructive",
  muted: "text-muted",
  primary: "text-primary",
  secondary: "text-secondary",
} as const;

const TextVariants: Record<TextColorType, ClassType> = {
  default: "text-text",
  accent: "text-accent",
  destructive: "text-destructive",
  muted: "text-muted",
  primary: "text-primary",
  secondary: "text-secondary",
} as const;

export {
  type TypographyClassType,
  TypographyClass,
  HeadingVariants,
  TextVariants,
};
