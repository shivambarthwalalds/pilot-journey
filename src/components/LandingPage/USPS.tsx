"use client";
import { AppAssets } from "@/constants/Assets";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { CgLock } from "react-icons/cg";
import { IoAirplaneOutline } from "react-icons/io5";
import MainHeading from "../Common/MainHeading";
import ScrollAnimationYAxis from "../Common/ScrollAnimationYAxis";

const Button = ({
    text,
    className,
    onClick,
}: {
    text: string;
    className?: string;
    onClick?: () => void;
}) => (
    <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={className}
        onClick={onClick}
    >
        {text}
    </motion.button>
);

export default function EnhancedUSPS() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const steps = [
        {
            title: "Academic Eligibility",
            description: "Complete 10+2 with PCM or qualify via NIOS if needed.",
            icon: AppAssets.Academic,
            color: "from-lightBrown to-lightBrown-dark",
        },
        {
            title: "DGCA Class 2 Medical",
            description: "Basic health checkup; Form 35 issued the same day.",
            cost: "₹8,000 – ₹10,000",
            icon: AppAssets.DGCA,
            color: "from-lightBrown to-lightBrown-dark",
        },
        {
            title: "DGCA Ground School",
            description:
                "Study key aviation subjects at a DGCA-approved ground school.",
            cost: "₹2.5 – ₹3 Lakhs",
            duration: "6–8 months",
            icon: AppAssets.studyavation,
            color: "from-lightBrown to-lightBrown-dark",
        },
        {
            title: "DGCA Class 1 Medical",
            description:
                "Complete advanced medical tests; results in 5 working days.",
            cost: "₹10,000 – ₹15,000",
            icon: AppAssets.Complete,
            color: "from-lightBrown to-lightBrown-dark",
        },
        {
            title: "CPL Flight Training",
            description: "Complete 200 hours of flying at approved flight school.",
            cost: "India: ₹45 – ₹55 Lakhs, Abroad: ₹45 – ₹60 Lakhs",
            duration: "12–15 months",
            icon: AppAssets.CPLFlight,
            color: "from-lightBrown to-lightBrown-dark",
        },
        {
            title: "Final Steps: Interview & Type Rating",
            description:
                "Clear airline interview and complete aircraft-specific type rating.",
            interviewPrep: "3 months",
            typeRating: "₹15 – ₹20 Lakhs",
            summary: "Total: ~2 Years | ₹75 – ₹80 Lakhs",
            icon: AppAssets.final,
            color: "from-lightBrown to-lightBrown-dark",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const stepVariants: any = {
        hidden: {
            opacity: 0,
            x: -50,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const imageVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            rotate: -5,
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["0.5 1", "1 0.5"],
    });

    const flightY = useTransform(scrollYProgress, [0, 0.2, 1], [100, 500, -1500]);
    const flightX = useTransform(scrollYProgress, [0, 1], [0, 0]);
    return (
        <section
            id="pilots-pathway"
            ref={sectionRef}
            className="w-full  mx-auto py-10 lg:py-20  px-4 lg:px-16 xl:px-32 relative "
        >
            <div className="relative z-10 ">
                <ScrollAnimationYAxis>
                    {" "}
                    <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-16">
                        <MainHeading
                            title="How to Become a Pilot?"
                            subtitle="Your step-by-step journey to becoming a certified pilot with detailed costs and timeline."
                            color="text-black"
                        />
                    </div>
                </ScrollAnimationYAxis>

                <div className="flex flex-col lg:flex-row  justify-center  w-full gap-0 md:gap-10  2xl:gap-0 items-stretch min-h-full">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="relative z-10 h-full flex justify-center  flex-col w-full flex-1"
                    >
                        {steps?.map((step: any, index: number) => (
                            <motion.div
                                key={index}
                                variants={stepVariants}
                                className="relative flex items-start gap-4 mb-6"
                                onHoverStart={() => setHoveredStep(index)}
                                onHoverEnd={() => setHoveredStep(null)}
                            >
                                {index < steps.length - 1 && (
                                    <motion.div
                                        className="absolute left-5 top-9 w-0.5 h-32 bg-gradient-to-b from-gray-300 to-gray-200"
                                        initial={{ scaleY: 0 }}
                                        animate={{ scaleY: 1 }}
                                        transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                                    />
                                )}

                                <motion.div
                                    className={`relative z-10 w-10 h-10 rounded-full bg-lightBrown ${step.color} flex items-center justify-center text-white shadow-lg`}
                                    whileHover={{ scale: 1.01, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                                    >
                                        <Image
                                            src={step?.icon}
                                            alt="Professional Pilot"
                                            width={1920}
                                            height={1080}
                                            className="w-6 h-6 object-contain"
                                            priority
                                        />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    className={`flex-1 bg-white rounded-xl py-2 px-4 shadow-md border border-gray-100 transition-all duration-300 ${hoveredStep === index
                                            ? "shadow-xl scale-105 border-lightBrown"
                                            : ""
                                        }`}
                                    whileHover={{ y: -5 }}
                                    onMouseEnter={() => setHoveredStep(index)}
                                    onMouseLeave={() => setHoveredStep(null)}
                                >
                                    <h3
                                        className="text-base font-semibold text-gray-800 mb-1 flex items-center gap-2 relative group"
                                        onMouseEnter={() => setHoveredStep(index)}
                                        onMouseLeave={() => setHoveredStep(null)}
                                    >
                                        {step.title}

                                        <span className="relative inline-block w-[24px] h-4 overflow-visible">
                                            <motion.span
                                                initial={{ width: 0 }}
                                                animate={{
                                                    width: hoveredStep === index ? "90px" : "0px",
                                                }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                                className="absolute left-0 top-1/2 -translate-y-1/2 border-t-2 border-dotted border-lightBrown"
                                            />

                                            {/* Plane icon */}
                                            <motion.span
                                                initial={{ x: 0 }}
                                                animate={{ x: hoveredStep === index ? 90 : 0 }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                                className="absolute left-0 top-1/2 -translate-y-1/2"
                                            >
                                                <IoAirplaneOutline className="w-4 h-4 text-lightBrown" />
                                            </motion.span>
                                        </span>
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                                        {step?.description}
                                    </p>

                                    <div className="space-y-2">
                                        {/* {step.cost && (
                      <motion.div
                        className="flex items-center gap-2 text-xs"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + 0.6 }}
                      >
                        <FaDollarSign className="w-4 h-4 text-xs text-grayish" />
                        <span className="font-semibold text-grayish">
                          Cost:
                        </span>
                        <span className="text-gray-600">{step.cost}</span>
                      </motion.div>
                    )} */}

                                        {step.duration && (
                                            <motion.div
                                                className="flex items-center gap-2 text-xs"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.2 + 0.7 }}
                                            >
                                                <CgLock className="w-4 h-4 text-xs text-lightBrown" />
                                                <span className="font-semibold text-lightBrown">
                                                    Duration:
                                                </span>
                                                <span className="text-gray-600">{step.duration}</span>
                                            </motion.div>
                                        )}

                                        {step.interviewPrep && (
                                            <motion.div
                                                className="text-xs text-gray-600"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: index * 0.2 + 0.8 }}
                                            >
                                                <span className="font-semibold text-lightBrown-dark">
                                                    Interview Prep:
                                                </span>{" "}
                                                {step.interviewPrep}
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className=" hidden relative z-0 lg:flex justify-center  flex-1 h-full"
                    >
                        <motion.div className="relative z-10 w-full max-w-lg">
                            {/* <div className="absolute inset-0 bg-gradient-to-r from-lightBrown to-lightBrown-dark rounded-xl blur-2xl opacity-20 transform rotate-6"></div> */}
                            <div className="relative z-0 rounded-xl ">
                                <Image
                                    src={AppAssets.runway}
                                    alt="Professional Pilot"
                                    width={1920}
                                    height={1080}
                                    className="w-full h-[640px] object-cover rounded-xl"
                                    priority
                                />

                                <motion.div
                                    style={{ y: flightY, x: flightX }}
                                    className="absolute z-50 bottom-10 left-5"
                                >
                                    <Image
                                        src={AppAssets.Flight}
                                        alt="Professional Pilot"
                                        width={1920}
                                        height={1080}
                                        className="w-full h-60 object-cover rounded-xl"
                                        priority
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
