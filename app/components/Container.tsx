import React from "react";

/**
 * Reusable container component for consistent max-width and responsive padding.
 * Wraps content with standard Sekolah Alam Gaharu layout constraints.
 *
 * @typedef {Object} ContainerProps
 * @property {React.ReactNode} children - Content to be wrapped
 * @property {string} [className] - Additional CSS classes
 *
 * @example
 * <Container>
 *   <div>Page content here</div>
 * </Container>
 */
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
