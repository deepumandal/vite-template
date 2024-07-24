/**
 * @typedef {("primary" | "secondary"  | "tertiary")} Background
 * Represents the background color variants available in the project.
 */

/**
 * @typedef {("ascent")} AscentVariable
 * Represents the ascent color variants used for accent elements.
 */

/**
 * @typedef {("heading")} Heading
 * Represents the heading color variants.
 */

/**
 * @typedef {("text")} Text
 * Represents the text color variants.
 */

/**
 * Background color options available in the project.
 * @type {Background}
 */
type Background = "primary" | "secondary" | "tertiary"; // Add more based on project requirements

/**
 * Ascent color options for accent elements.
 * @type {AscentVariable}
 */
type AscentVariable = "ascent";

/**
 * Heading color options.
 * @type {Heading}
 */
type Heading = "heading";

/**
 * Text color options.
 * @type {Text}
 */
type Text = "text";

export {
  type Background as BackgroundType,
  type AscentVariable as AscentVariableType,
  type Heading as HeadingType,
  type Text as TextType,
};
