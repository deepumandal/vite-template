import { type HeadingColorType, type TextColorType } from "@Components/config";
import { ClassType } from "@Utils/className";

export const TextColor: Record<TextColorType, ClassType> = {
  accent: "text-accent",
  default: "text-text",
  destructive: "text-destructive",
  muted: "text-muted",
  primary: "text-primary",
  secondary: "text-secondary",
};

export const HeadingColor: Record<HeadingColorType, ClassType> = {
  accent: "text-accent",
  default: "text-text",
  destructive: "text-destructive",
  muted: "text-muted",
  primary: "text-primary",
  secondary: "text-secondary",
};
