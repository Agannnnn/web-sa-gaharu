import React from "react";

/**
 * Reusable Button component with multiple style variants and sizes.
 * Supports both button and link (anchor) elements with consistent styling.
 *
 * @typedef {Object} ButtonProps
 * @property {React.ReactNode} children - Button text or content
 * @property {"primary" | "secondary" | "outline"} [variant="primary"] - Button style variant
 * @property {"sm" | "md" | "lg"} [size="md"] - Button size
 * @property {string} [href] - URL for link button (if provided, renders as <a> instead of <button>)
 * @property {"button" | "submit" | "reset"} [type="button"] - Button type (only used when href is not provided)
 * @property {boolean} [disabled] - Disabled state
 * @property {string} [className] - Additional CSS classes
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement>} [rest] - Additional HTML attributes
 *
 * @example
 * // Primary button
 * <Button variant="primary" size="lg">Click me</Button>
 *
 * // Link button
 * <Button variant="secondary" href="/admission">Learn More</Button>
 *
 * // Outline button
 * <Button variant="outline" size="sm">Cancel</Button>
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
}

/**
 * Get button size classes based on size prop.
 * @param {string} size - Size variant (sm | md | lg)
 * @returns {string} Tailwind CSS classes for sizing
 */
const getSizeClasses = (size: string): string => {
  const sizes: Record<string, string> = {
    sm: "px-2 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  return sizes[size] || sizes.md;
};

/**
 * Get button variant classes based on variant prop.
 * @param {string} variant - Variant style (primary | secondary | outline)
 * @returns {string} Tailwind CSS classes for variant styling
 */
const getVariantClasses = (variant: string): string => {
  const variants: Record<string, string> = {
    primary:
      "bg-primary text-white hover:opacity-90 border border-primary transition-colors",
    secondary:
      "bg-secondary text-primary hover:opacity-90 border border-secondary transition-colors",
    outline:
      "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white transition-colors",
  };
  return variants[variant] || variants.primary;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  disabled = false,
  className = "",
  ...rest
}: ButtonProps) {
  const baseClasses =
    "font-bold rounded-lg inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed";
  const sizeClasses = getSizeClasses(size);
  const variantClasses = getVariantClasses(variant);
  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  // Render as link if href provided
  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      {...rest}
    >
      {children}
    </button>
  );
}
