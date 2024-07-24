import { BackgroundColorType, BackgroundColor } from "@UI/Common";
import { type ClassType, cn } from "@Utils/className";
import { AriaRole, FC, ReactNode } from "react";

type GridElement = "div" | "section" | "article" | "aside";

type GridProps = {
  children: ReactNode;
  className?: ClassType;
  id?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  ariaLive?: "off" | "polite" | "assertive";
  role?: AriaRole;
  customStyles?: string;
  asElement: GridElement;
  border?: boolean;
  backgroundColor?: BackgroundColorType;
};

/**
 * Grid component for wrapping content with performance and SEO optimizations.
 * The Grid component renders a specified Grid-level HTML element with optional attributes
 * to improve accessibility and SEO. It supports custom styling and provides additional
 * attributes such as `id`, `aria-label`, `aria-describedby`, and `aria-live`
 * to enhance the accessibility of the component. It also allows for different Grid-level
 * elements to be used for various layout needs.
 *
 * @param {GridProps} props - The props for the Grid component.
 * @param {ReactNode} props.children - The content to be wrapped by the Grid.
 * @param {ClassType} [props.className] - Additional class names to apply to the Grid.
 * @param {string} [props.id] - Optional ID for the Grid, useful for CSS or JavaScript targeting.
 * @param {string} [props.ariaLabel] - Optional ARIA label for the Grid to improve accessibility.
 * @param {string} [props.ariaDescribedBy] - Optional ARIA described-by ID to provide more context.
 * @param {"off" | "polite" | "assertive"} [props.ariaLive] - Optional ARIA live region settings for dynamic content updates.
 * @param {AriaRole} [props.role] - The ARIA role to apply for accessibility. Defaults to "region".
 * @param {string} [props.customStyles] - Additional custom styles to apply inline.
 * @param {GridElement} [props.asElement] - The HTML element to use for the Grid. Defaults to "div".
 *
 * @returns {JSX.Element} The rendered Grid component.
 *
 * @example
 * // Basic usage
 * <Grid>
 *   <p>Your content here</p>
 * </Grid>
 *
 * @example
 * // With custom ID, ARIA attributes, and styles
 * <Grid
 *   id="unique-id"
 *   ariaLabel="Description of the Grid"
 *   ariaDescribedBy="description-id"
 *   ariaLive="polite"
 *   role="region"
 *   customStyles="background-color: #f0f0f0; padding: 16px;"
 * >
 *   <h2>Header</h2>
 *   <p>Content with additional attributes and custom styles</p>
 * </Grid>
 *
 * @example
 * // Using a different HTML element
 * <Grid asElement="section">
 *   <h2>Section Header</h2>
 *   <p>Content inside a section element</p>
 * </Grid>
 */
const Grid: FC<GridProps> = ({
  children,
  className,
  id,
  ariaLabel,
  ariaDescribedBy,
  ariaLive,
  role = "region",
  asElement: Element,
  border,
  backgroundColor: background = "primary",
  ...rest
}: GridProps): JSX.Element => (
  <Element
    id={id}
    aria-label={ariaLabel}
    aria-describedby={ariaDescribedBy}
    aria-live={ariaLive}
    role={role}
    className={cn(
      "p-4",
      border && "border border-red",
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      BackgroundColor[background] as ClassType,

      className
    )}
    {...rest}
  >
    {children}
  </Element>
);

export { type GridProps };
export default Grid;
