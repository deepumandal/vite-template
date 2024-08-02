type asContainerType = "header" | "footer" | "nav" | "main";
type asFlexType = "div" | "section" | "article" | "aside";
type asBlockType = "div" | "section" | "article" | "aside";
type asGridType = "div" | "section" | "article" | "aside";
type asGridItemType = "div";
type asHeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type asTextType = "p" | "span" | "strong";

type asTypographyType = asHeadingType | asTextType;

type ElementTypeMap = {
  container: asContainerType;
  flex: asFlexType;
  block: asBlockType;
  Grid: asGridType;
  Typography: asTypographyType;
  GridItem: asGridItemType;
};
type AsElementType<T extends keyof ElementTypeMap> = ElementTypeMap[T];
type ElementTypeMapKeys = keyof ElementTypeMap;
type ElementKeysTypeUnion = ElementTypeMap[ElementTypeMapKeys];
type AllElementTypes = AsElementType<ElementTypeMapKeys>;

export {
  type asContainerType,
  type asFlexType,
  type asBlockType,
  type asGridType,
  type asGridItemType,
  type asTypographyType,
  type asHeadingType,
  type asTextType,

  // Element type map
  type ElementTypeMap,
  type AsElementType,
  type ElementKeysTypeUnion,
  type AllElementTypes,
};
