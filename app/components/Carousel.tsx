"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

/**
 * Image carousel component with full-width slides and smooth transitions.
 * Features navigation buttons (prev/next with arrow icons) and page indicators.
 *
 * Height Calculation:
 * - Carousel height = 100vh (viewport height) - 64px (Navbar height)
 * - Using calc(100vh - 64px) to account for fixed Navbar
 * - Depends on Navbar having h-16 (64px) height — see Navbar.tsx
 *
 * CSS Layout Strategy:
 * - Container: relative positioning with overflow hidden to clip slides
 * - Slide wrapper: flexbox with CSS transform for smooth transitions
 * - Image: centered using flex items-center justify-center, object-contain preserves aspect ratio
 * - Navigation: absolute positioning on left/right sides
 * - Indicators: absolute positioning at bottom center
 *
 * JavaScript Role: Event handlers only (click to navigate)
 * All animations and layout handled by CSS (transform, transition, flexbox)
 *
 * @param {CarouselProps} props - Component props
 * @param {Array<ImageSlide>} props.images - Array of image slides with url and alt text
 * @returns {JSX.Element} Rendered carousel component
 *
 * @example
 * const images = [
 *   { url: "https://...", alt: "Slide 1" },
 *   { url: "https://...", alt: "Slide 2" },
 * ];
 * <Carousel images={images} />
 */

interface ImageSlide {
  url: string;
  alt: string;
  metadata: any;
}

interface CarouselProps {
  images: ImageSlide[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const minSwipeDistance = 50;

  /**
   * Navigate to next slide.
   * Wraps around to beginning when reaching the end.
   */
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  /**
   * Navigate to previous slide.
   * Wraps around to end when at the beginning.
   */
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  /**
   * Navigate directly to a specific slide index.
   * @param {number} index - Target slide index
   */
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  /**
   * Handle touch start event.
   * Records the starting X position of the touch.
   * @param {React.TouchEvent} e - Touch event
   */
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  /**
   * Handle touch end event.
   * Calculates swipe distance and direction, triggers slide navigation if distance exceeds threshold.
   * Swipe right (positive distance) → move to previous slide
   * Swipe left (negative distance) → move to next slide
   * @param {React.TouchEvent} e - Touch event
   */
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const touchEndPosition = e.changedTouches[0].clientX;

    const distance = touchStart - touchEndPosition;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    // Reset touch start position
    setTouchStart(null);
  };

  return (
    <div className="w-full">
      {/* Main carousel container */}
      <div
        className="relative w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slide wrapper with CSS transform animation */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentIndex} * 100%))`,
          }}
        >
          {/* Individual slides */}
          {images.map((slide, index) => (
            <div
              key={index}
              className="relative w-full flex-shrink-0 flex items-center justify-center bg-white"
            >
              <Image
                src={slide.url}
                alt={slide.alt}
                height={slide.metadata?.dimensions?.height ?? 720}
                width={slide.metadata?.dimensions?.width ?? 1280}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Previous button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 md:p-3 text-white transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Next button */}
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 md:p-3 text-white transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Page indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                index === currentIndex
                  ? "bg-white" /* Active indicator: full opacity white */
                  : "bg-white/30" /* Inactive indicator: white with 30% opacity */
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
