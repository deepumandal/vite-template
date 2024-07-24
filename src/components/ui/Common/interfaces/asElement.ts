type ContainerType = "header" | "footer" | "nav" | "main";
type FlexType = "div" | "section" | "article" | "aside";
type BlockType = "div" | "section" | "article" | "aside";
type GridType = "div" | "section" | "article" | "aside";

type ElementTypeMap = {
  container: ContainerType;
  flex: FlexType;
  block: BlockType;
  Grid: GridType;
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

  // Element type map
  type ElementTypeMap,
  type AsElementType,
  type ElementKeysTypeUnion,
  type AllElementTypes,
};
