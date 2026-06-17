/**
 * Reusable section heading component with responsive typography and optional subtitle.
 * Automatically scales font sizes for mobile and desktop viewports.
 *
 * @typedef {Object} SectionHeadingProps
 * @property {string} title - Main heading text
 * @property {string} [subtitle] - Optional subtitle text below the title
 * @property {"center" | "left"} [alignment="center"] - Text alignment
 * @property {string} [className] - Additional CSS classes
 * @property {string} [titleClassName] - Additional classes for title element
 * @property {string} [subtitleClassName] - Additional classes for subtitle element
 *
 * @example
 * <SectionHeading
 *   title="Produk Unggulan Kami"
 *   subtitle="Inovasi pendidikan untuk masa depan"
 *   alignment="center"
 * />
 *
 * @example
 * <SectionHeading
 *   title="Langkah Pendaftaran"
 *   alignment="left"
 * />
 */
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "center" | "left";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}: SectionHeadingProps) {
  const alignmentClass = alignment === "center" ? "text-center" : "text-left";

  return (
    <div className={`space-y-3 ${alignmentClass} ${className}`}>
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-primary ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg text-muted leading-relaxed ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
