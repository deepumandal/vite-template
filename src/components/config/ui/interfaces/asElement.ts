type ContainerType = "header" | "footer" | "nav" | "main";
type FlexType = "div" | "section" | "article" | "aside";
type BlockType = "div" | "section" | "article" | "aside";
type GridType = "div" | "section" | "article" | "aside";
type GridItemType = "div";
type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TextType = "p" | "span" | "strong";

type TypographyType = HeadingType | TextType;

type ElementTypeMap = {
  container: ContainerType;
  flex: FlexType;
  block: BlockType;
  Grid: GridType;
  Typography: TypographyType;
  GridItem: GridItemType;
};
type AsElementType<T extends keyof ElementTypeMap> = ElementTypeMap[T];
type ElementTypeMapKeys = keyof ElementTypeMap;
type ElementKeysTypeUnion = ElementTypeMap[ElementTypeMapKeys];
type AllElementTypes = AsElementType<ElementTypeMapKeys>;

export {
  type ContainerType,
  type FlexType,
  type BlockType,
  type GridType,
  type GridItemType,
  type TypographyType,
  type HeadingType,
  type TextType,

  // Element type map
  type ElementTypeMap,
  type AsElementType,
  type ElementKeysTypeUnion,
  type AllElementTypes,
};
