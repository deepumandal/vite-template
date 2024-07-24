import { BackgroundColor, BackgroundColorType } from "@UI/Common/Background";
import { type ClassType, cn } from "@Utils/className";
import { AriaRole, FC, ReactNode } from "react";

type asElement = "header" | "footer" | "nav" | "main";

type ContainerProps = {
  children: ReactNode;
  className?: ClassType;
  asElement: asElement;
  role?: AriaRole;
  ScreenType?: "container" | "full-screen";
  border?: boolean;
  backgroundColor?: BackgroundColorType;
  fullHeight?: boolean;
};

/**
 * Container component for wrapping content with optional styles and roles.
 *
 * This component provides a flexible container that can wrap any content
 * and apply various styling and accessibility options based on the props
 * provided. It supports setting the HTML element type, ARIA roles, screen type,
 * and optional border styling.
 *
 * @param {ContainerProps} props - The props for the Container component.
 * @param {ReactNode} props.children - The content to be wrapped by the container.
 * @param {ClassType} [props.className] - Additional class names to apply to the container.
 * @param {asElement} [props.asElement] - The HTML element type to render. Defaults to "main".
 * @param {AriaRole} [props.role] - The ARIA role to apply for accessibility. Defaults to "main".
 * @param {"container" | "full-screen"} [props.ScreenType] - Determines the screen width type. "container" for fixed width and "full-screen" for full width. Defaults to "full-screen".
 * @param {boolean} [props.border] - Whether to apply a red border to the container. Defaults to false.
 *
 * @returns {JSX.Element} The rendered container component.
 *
 * @example
 * // Basic usage
 * <Container>
 *   <p>Your content here</p>
 * </Container>
 *
 * @example
 * // With custom element type, class name, and role
 * <Container asElement="header" className="custom-class" role="banner">
 *   <h1>Site Header</h1>
 * </Container>
 *
 * @example
 * // With container screen type and border
 * <Container ScreenType="container" border>
 *   <p>Content with container width and red border</p>
 * </Container>
 */
const Container: FC<ContainerProps> = ({
  children,
  asElement: Element,
  className,
  role,
  ScreenType = "container",
  border,
  backgroundColor: background = "primary",
  fullHeight,
}) => (
  <Element
    className={cn(
      "p-2 overflow-x-hidden Hide-Scroll-Track mx-auto",
      ScreenType == "container" ? "container" : "w-full",
      border && "border border-red",
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      BackgroundColor[background] as ClassType,
      fullHeight ? "h-full min-h-screen" : "",
      className
    )}
    role={role ?? "main"}
  >
    {children}
  </Element>
);

export { type ContainerProps };
export default Container;
