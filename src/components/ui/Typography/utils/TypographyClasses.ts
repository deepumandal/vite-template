import { ClassType } from "@Utils/className";

type TypographyClassType = {
  [key: string]: ClassType;
};
const TypographyClass: TypographyClassType = {
  h1: "text-4xl font-extrabold leading-tight tracking-tight text-gray-900",
  h2: "text-3xl font-bold leading-snug tracking-tight text-gray-900",
  h3: "text-2xl font-semibold leading-normal tracking-tight text-gray-900",
  h4: "text-xl font-medium leading-normal tracking-tight text-gray-900",
  h5: "text-lg font-medium leading-snug tracking-tight text-gray-900",
  h6: "text-base font-medium leading-snug tracking-tight text-gray-900",
  body: "text-base font-normal leading-relaxed tracking-normal text-gray-800",
  bodySmall:
    "text-sm font-normal leading-relaxed tracking-normal text-gray-800",
  caption: "text-xs font-normal leading-tight tracking-wide text-gray-600",
  overline:
    "text-xs font-bold leading-none tracking-widest uppercase text-gray-600",
  link: "text-base font-medium leading-relaxed tracking-normal text-blue-600 hover:text-blue-800",
} as const;

export { type TypographyClassType };
export default TypographyClass;
