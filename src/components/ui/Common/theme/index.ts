import { BackgroundType } from "@Config/colors";

type Props = {
  // eslint-disable-next-line no-unused-vars
  [key in BackgroundType]:
    | "bg-primary dark:bg-primary-dark"
    | "bg-secondary dark:bg-secondary-dark"
    | "bg-tertiary dark:bg-tertiary-dark";
};

const BackgroundColor: Props = {
  primary: "bg-primary dark:bg-primary-dark",
  secondary: "bg-secondary dark:bg-secondary-dark",
  tertiary: "bg-tertiary dark:bg-tertiary-dark",
};

export { BackgroundColor, type BackgroundType as BackgroundColorType };
