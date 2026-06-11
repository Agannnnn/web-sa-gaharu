"use client";

import { Testimonial } from "@/lib/sanity/queries";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

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

    setTouchStart(null);
  };

  return (
    <div className="w-full">
      <div
        className="relative w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentIndex} * 100%))`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative w-full flex-shrink-0 flex items-center justify-center bg-primary px-8 py-2 lg:py-12"
              style={{ minHeight: "300px" }}
            >
              <div className="relative w-[70%]">
                <div className="absolute top-0 right-full bg-secondary px-3 py-1">
                  <Quote
                    fill="#035534"
                    color="#035534"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="max-w-4xl text-left space-y-4 bg-gray-200 px-6 py-4">
                  <p className="text-sm lg:text-xl font-semibold italic leading-relaxed">
                    {testimonial.message}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-base text-xs lg:text-sm">
                      {testimonial.owner}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 md:p-3 text-white transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 md:p-3 text-white transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                index === currentIndex ? "bg-white" : "bg-white/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
