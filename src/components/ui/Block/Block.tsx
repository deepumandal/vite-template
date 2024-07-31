import { forwardRef } from "react";
import { AnyType } from "@AppTypes/commonTypes";
import { CommonProps } from "@Components/config";
import { cn } from "@Utils/className";

type BlockProps = CommonProps<"block"> & object;

/**
 * Block component for wrapping content with performance and SEO optimizations.
 * The Block component renders a specified block-level HTML element with optional attributes
 * to improve accessibility and SEO. It supports custom styling and provides additional
 * attributes such as `id`, `aria-label`, `aria-describedby`, and `aria-live`
 * to enhance the accessibility of the component. It also allows for different block-level
 * elements to be used for various layout needs.
 *
 * @param {BlockProps} props - The props for the Block component.
 * @param {ReactNode} props.children - The content to be wrapped by the block.
 * @param {ClassType} [props.className] - Additional class names to apply to the block.
 * @param {string} [props.id] - Optional ID for the block, useful for CSS or JavaScript targeting.
 * @param {string} [props.ariaLabel] - Optional ARIA label for the block to improve accessibility.
 * @param {string} [props.ariaDescribedBy] - Optional ARIA described-by ID to provide more context.
 * @param {"off" | "polite" | "assertive"} [props.ariaLive] - Optional ARIA live region settings for dynamic content updates.
 * @param {AriaRole} [props.role] - The ARIA role to apply for accessibility. Defaults to "region".
 * @param {string} [props.customStyles] - Additional custom styles to apply inline.
 * @param {BlockElement} [props.asElement] - The HTML element to use for the block. Defaults to "div".
 *
 * @returns {JSX.Element} The rendered block component.
 *
 * @example
 * // Basic usage
 * <Block>
 *   <p>Your content here</p>
 * </Block>
 *
 * @example
 * // With custom ID, ARIA attributes, and styles
 * <Block
 *   id="unique-id"
 *   ariaLabel="Description of the block"
 *   ariaDescribedBy="description-id"
 *   ariaLive="polite"
 *   role="region"
 *   customStyles="background-color: #f0f0f0; padding: 16px;"
 * >
 *   <h2>Header</h2>
 *   <p>Content with additional attributes and custom styles</p>
 * </Block>
 *
 * @example
 * // Using a different HTML element
 * <Block asElement="section">
 *   <h2>Section Header</h2>
 *   <p>Content inside a section element</p>
 * </Block>
 */
const Block = forwardRef<AnyType, BlockProps>(
  (
    {
      children,
      className,
      id,
      ariaLabel,
      ariaDescribedBy,
      ariaLive,
      role,
      asElement: Element = "div",
      border,
      ...rest
    }: BlockProps,
    ref
  ): JSX.Element => (
    <Element
      ref={ref}
      id={id}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-live={ariaLive}
      role={role}
      className={cn("p-4", border && "border border-border-red", className)}
      {...rest}
    >
      {children}
    </Element>
  )
);

Block.displayName = "Block";
export { type BlockProps, Block };
