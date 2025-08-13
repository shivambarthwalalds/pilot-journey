"use client";
import { useState, useRef, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface SliderProps {
    autoplay?: boolean;
    autoplayDelay?: number;
    navigatorDots?: boolean;
    children: React.ReactNode[];
    breakpoints?: {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    navigation?: boolean;
    gap?: number;
    startIndex?: number;
    arrow?: any;
    onSlideChange?: (index: number) => void;
    Automargin?: any;
}

const Slider: React.FC<SliderProps> = ({
    children,
    autoplay = false,
    autoplayDelay = 4000,
    breakpoints = {},
    navigation = false,
    navigatorDots = true,
    gap = 0,
    startIndex = 0,
    arrow,
    onSlideChange,
    Automargin,
}) => {
    const [currentSlide, setCurrentSlide] = useState<number>(startIndex);
    const [slidesToShow, setSlidesToShow] = useState<number>(1);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchMoveX, setTouchMoveX] = useState<number | null>(null);

    const sliderRef = useRef<HTMLDivElement>(null);
    const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // Update slidesToShow based on breakpoints
    useEffect(() => {
        const updateSlides = () => {
            if (typeof window !== "undefined") {
                if (breakpoints.xl && window.innerWidth >= 1200) {
                    setSlidesToShow(breakpoints.xl);
                } else if (breakpoints.lg && window.innerWidth >= 992) {
                    setSlidesToShow(breakpoints.lg);
                } else if (breakpoints.md && window.innerWidth >= 768) {
                    setSlidesToShow(breakpoints.md);
                } else if (breakpoints.sm && window.innerWidth >= 576) {
                    setSlidesToShow(breakpoints.sm);
                } else if (breakpoints.xs && window.innerWidth >= 480) {
                    setSlidesToShow(breakpoints.xs);
                } else {
                    setSlidesToShow(1);
                }
            }
        };

        updateSlides(); // Set initial slides
        window.addEventListener("resize", updateSlides);

        return () => window.removeEventListener("resize", updateSlides);
    }, [breakpoints]);

    // Handle autoplay
    useEffect(() => {
        if (autoplay) {
            startAutoplay();
        }
        return () => stopAutoplay();
    }, [autoplay, currentSlide]);

    // Notify parent component about slide change
    useEffect(() => {
        if (onSlideChange) {
            onSlideChange(currentSlide);
        }
    }, [currentSlide, onSlideChange]);

    const startAutoplay = () => {
        stopAutoplay();
        autoplayIntervalRef.current = setInterval(() => {
            nextSlide();
        }, autoplayDelay);
    };

    const stopAutoplay = () => {
        if (autoplayIntervalRef.current) {
            clearInterval(autoplayIntervalRef.current);
        }
    };

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev + 1 >= children.length - slidesToShow + 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev - 1 < 0 ? children.length - slidesToShow : prev - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };
    const isDragging = useRef(false);
    // Handle touch/mouse drag for mobile and desktop
    const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        setTouchStartX(clientX);
        setTouchMoveX(clientX);
        isDragging.current = true;
        if (autoplay) stopAutoplay();
    };

    const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
        if (!isDragging.current) return;
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        setTouchMoveX(clientX);
        e.preventDefault(); // prevent native scroll
    };

    const handleTouchEnd = () => {
        if (!touchStartX || !touchMoveX) return;

        const deltaX = touchStartX - touchMoveX;
        const moveThreshold = 50;

        if (deltaX > moveThreshold) {
            nextSlide();
        } else if (deltaX < -moveThreshold) {
            prevSlide();
        }

        setTouchStartX(null);
        setTouchMoveX(null);
        isDragging.current = false;
        if (autoplay) startAutoplay();
    };
    const totalSlides: any = children.length - slidesToShow + 1;
    console.log("totalSlides", slidesToShow);
    console.log("children.length", children.length);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Navigation Arrows */}
            {navigation && slidesToShow < children.length && (
                <div
                    className={`${arrow
                        ? "absolute inset-0 z-10 flex  gap-8 items-center left-1/3 md:left-[80%] top-[85%] md:top-[70%]"
                        : "absolute inset-0 z-10 top-[60%] h-fit flex items-center"
                        }`}
                >
                    <button
                        onClick={prevSlide}
                        className={`text-heading cursor-pointer ${arrow
                            ? " text-black text-4xl "
                            : "border bg-white/80 text-primary rounded-full w-10"
                            } flex items-center justify-center left-0 h-10 absolute  ${!isHovered && "block"
                            }`}
                    >
                        <FaArrowLeftLong className="cursor-pointer text-black" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className={`text-heading cursor-pointer  ${arrow
                            ? " text-black text-4xl "
                            : "border bg-white/80 text-primary rounded-full w-10"
                            } flex items-center justify-center h-10 right-0 absolute ${!isHovered && "block"
                            }`}
                    >
                        <FaArrowRightLong className="cursor-pointer text-black" />
                    </button>
                </div>
            )}

            {/* Slider Content */}
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
                    className={`flex scroll-smooth transition-transform duration-500 ease-in-out `}
                    style={{
                        transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
                        gap: `${gap}px`,
                    }}
                >
                    {children.map((child, index) => {
                        const isVisible =
                            index >= currentSlide && index < currentSlide + slidesToShow;
                        const isFirstOrLast =
                            index === currentSlide ||
                            index === currentSlide + slidesToShow - 1;
                        const isDesktop =
                            typeof window !== "undefined" && window.innerWidth >= 1024;
                        return (
                            <div
                                key={index}
                                className="w-full flex-shrink-0 transition-transform duration-300"
                                style={{
                                    flex: `0 0 ${100 / slidesToShow}%`,
                                    transform:
                                        Automargin && isVisible && isFirstOrLast && isDesktop
                                            ? "translateY(6rem)"
                                            : "translateY(0)",
                                }}
                            >
                                {child}
                            </div>
                        );
                    })}
                </div>
            </div>
            {navigatorDots && slidesToShow < children.length && (
                <div
                    className={`absolute  mt-5 md:-bottom-10 -bottom-7   left-0 w-full flex justify-center space-x-2`}
                >
                    {Array.from({ length: totalSlides }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-4 w-4 rounded-full ${index === currentSlide ? "bg-primary" : "bg-gray-300"
                                }`}
                        ></button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Slider;
