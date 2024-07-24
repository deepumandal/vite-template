type FlexElementType = "div" | "section" | "article" | "aside";
type JustifyContentType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
type FlexDirectionType = "row" | "row-reverse" | "column" | "column-reverse";
type AlignItemsType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "stretch";

type AlignContentType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "stretch";

type justifyProps = {
  // eslint-disable-next-line no-unused-vars
  [key in JustifyContentType]: string;
};

type directionProps = {
  // eslint-disable-next-line no-unused-vars
  [key in FlexDirectionType]: string;
};
type alignItemsProps = {
  // eslint-disable-next-line no-unused-vars
  [key in AlignItemsType]: string;
};
type AlignContentProps = {
  // eslint-disable-next-line no-unused-vars
  [key in AlignContentType]: string;
};

const justifyObj: justifyProps = {
  center: "justify-center",
  "flex-end": "justify-end",
  "flex-start": "justify-start",
  "space-around": "justify-around",
  "space-between": "justify-between",
  "space-evenly": "justify-evenly",
};

const directionObj: directionProps = {
  row: "flex-row",
  "row-reverse": "flex-row-reverse",
  "column-reverse": "flex-col-reverse",
  column: "flex-col",
};
const alignItemsObj: alignItemsProps = {
  "flex-end": "items-end",
  "flex-start": "items-start",
  baseline: "items-baseline",
  center: "items-center",
  stretch: "items-stretch",
};

const alignContentObj: AlignContentProps = {
  "flex-end": "content-center",
  "flex-start": "content-start",
  "space-around": "content-around",
  "space-between": "content-between",
  center: "content-center",
  stretch: "content-stretch",
};

export {
  justifyObj,
  alignContentObj,
  type AlignContentType,
  type AlignItemsType,
  type FlexDirectionType,
  type FlexElementType,
  type JustifyContentType,
  alignItemsObj,
  directionObj,
};
