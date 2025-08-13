"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface SliderProps {
  children: React.ReactNode[];
  breakpoints?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  navigation?: boolean;
  dotColorActive?: string;
  dotColorInactive?: string;
  renderNavigationButtons?: (
    onClick: () => void,
    direction: "prev" | "next",
    isLastSlide: boolean,
    isFirstSlide: boolean
  ) => React.ReactNode;
  dots?: boolean;
  onSlideChange?: (index: number) => void;
  loop?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  ShowButtonOnSmallDevices?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  children,
  breakpoints = {},
  navigation = false,
  dotColorActive = "#2196F3",
  dotColorInactive = "#ffff", // Corrected prop name
  renderNavigationButtons,
  dots = false,
  onSlideChange,
  loop = false,
  autoplay = false,
  autoplayInterval = 3000,
  ShowButtonOnSmallDevices = false,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchMoveX, setTouchMoveX] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [slidesToShow, setSlidesToShow] = useState<number>(1); // Default value
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      loop
        ? (prev + 1) % children.length
        : Math.min(prev + 1, children.length - 1)
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      loop
        ? (prev - 1 + children.length) % children.length
        : Math.max(prev - 1, 0)
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (onSlideChange) {
      onSlideChange(index);
    }
  };

  const handleTouchStart = (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    setTouchStartX("touches" in e ? e.touches[0].clientX : e.clientX);
    setTouchMoveX(null);
  };

  const handleTouchMove = (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    setTouchMoveX("touches" in e ? e.touches[0].clientX : e.clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchMoveX || !sliderRef.current) return;
    const touchEndX = touchMoveX;
    const moveThreshold = 50;
    const deltaX = touchStartX - touchEndX;
    if (deltaX > moveThreshold) {
      nextSlide();
    } else if (deltaX < -moveThreshold) {
      prevSlide();
    }
    setTouchStartX(null);
    setTouchMoveX(null);
  };

  const handleDotClick = (index: number) => {
    goToSlide(index);
  };

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (typeof window !== "undefined") {
        if (breakpoints.xl && window.innerWidth >= 1200) {
          setSlidesToShow(breakpoints.xl);
        } else if (breakpoints.lg && window.innerWidth >= 992) {
          setSlidesToShow(breakpoints.lg);
        } else if (breakpoints.md && window.innerWidth >= 768) {
          setSlidesToShow(breakpoints.md);
        } else if (breakpoints.sm && window.innerWidth >= 576) {
          setSlidesToShow(breakpoints.sm);
        } else if (breakpoints.xs && window.innerWidth < 576) {
          setSlidesToShow(breakpoints.xs);
        }
      }
    };

    // Initial calculation
    updateSlidesToShow();

    // Update on window resize
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, [breakpoints]);

  useEffect(() => {
    let autoplayTimer: NodeJS.Timeout | null = null;
    if (autoplay && !isHovered) {
      autoplayTimer = setInterval(() => {
        nextSlide();
      }, autoplayInterval);
    }
    return () => {
      if (autoplayTimer) clearInterval(autoplayTimer);
    };
  }, [autoplay, autoplayInterval, children.length, loop, isHovered]);

  const totalSlides = Math.max(1, Math.ceil(children.length / slidesToShow));
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === totalSlides - 1;
  const smallDevice = typeof window !== "undefined" && window.innerWidth <= 768;
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {navigation && (
        <div className="absolute top-[35%] left-0 w-full flex justify-between z-10 ">
          {(smallDevice || !ShowButtonOnSmallDevices) && (
            <>
              {renderNavigationButtons ? (
                renderNavigationButtons(
                  () => prevSlide(),
                  "prev",
                  isLastSlide,
                  isFirstSlide
                )
              ) : (
                <button
                  onClick={prevSlide}
                  className={`text-heading border rounded-full m-5 bg-white flex items-center justify-center h-16 w-16 ${
                    !isHovered && "hidden"
                  }`}
                >
                  <FaChevronLeft />
                </button>
              )}

              {renderNavigationButtons ? (
                renderNavigationButtons(
                  () => nextSlide(),
                  "next",
                  isLastSlide,
                  isFirstSlide
                )
              ) : (
                <button
                  onClick={nextSlide}
                  className={`text-heading border bg-white rounded-full m-5 flex items-center justify-center h-16 w-16 ${
                    !isHovered && "hidden"
                  }`}
                >
                  <FaChevronRight />
                </button>
              )}
            </>
          )}
        </div>
      )}

      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
      >
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{ flex: `0 0 ${100 / slidesToShow}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {dots && (
        <div
          className={`absolute bottom-4 w-full flex justify-center space-x-2 ${
            slidesToShow === 1 ? "bottom-4" : "bottom-[-10px]"
          }`}
        >
          {Array.from({ length: totalSlides }, (_, index) => (
            <div key={index} className=" rounded-full h-3 w-3">
              <button
                style={{
                  backgroundColor:
                    index === currentSlide ? dotColorActive : dotColorInactive,
                }}
                onClick={() => handleDotClick(index)}
                className="h-2 w-2 rounded-full flex justify-center items-center"
              ></button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
