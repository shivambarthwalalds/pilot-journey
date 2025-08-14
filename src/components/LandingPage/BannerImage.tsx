"use client";
import { GiAirplaneDeparture } from "react-icons/gi";
import ScrollAnimationYAxis from "../Common/ScrollAnimationYAxis";
import { AppAssets } from "@/constants/Assets";
import Button from "../Common/Button";
import FormSection from "./FormSection";
import Link from "next/link";

const BannerImage = () => {


    return (
        <div
            className="relative w-full min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${AppAssets.mainBanner})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 w-full bg-black/70"></div>

            <div className="md:absolute inset-0 flex flex-col lg:flex-row justify-evenly items-center p-4 md:p-0">
                <div className="flex flex-col ite md:items-start gap-6  md:w-[60%] pt-24 md:pt-0">

                    <div className=" md:mt-2 space-y-2 lg:space-y-4 px-4 md:px-0 z-20">
                        <ScrollAnimationYAxis>
                            <h1 className="text-xl lg:text-5xl font-semibold capitalize text-center md:text-left tracking-wide lg:leading-15 text-customWhite">
                                Up to ₹15 Lakh Scholarship for Top Performing Students
                            </h1>
                        </ScrollAnimationYAxis>

                        {/* Subheading */}
                        <ScrollAnimationYAxis>
                            <p className="text-customWhite text-center md:text-left w-full text-xl lg:text-3xl py-2">
                                25% Off on DGCA Ground Classes for All Female Cadets
                            </p>

                            <div className="flex justify-center lg:justify-start py-2">
                                <Link
                                    href="https://www.pilotspathway.in/"
                                    className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
                                >
                                    <Button
                                        text="Start Your Pilot Journey Today"
                                        icon={<GiAirplaneDeparture className="text-xl group-hover:translate-x-1 transition-transform duration-300" />}
                                        className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-bold shadow-2xl flex items-center gap-3 text-lg border border-blue-500/30 backdrop-blur-sm relative overflow-hidden"
                                    />
                                </Link>
                            </div>
                        </ScrollAnimationYAxis>
                    </div>
                </div>

                {/* Form */}
                <div className="px-1 sm:px-6 lg:px-2 lg:w-[30%] w-full md:mt-10  ">
                    <FormSection />
                </div>
            </div>
        </div>
    );
};

export default BannerImage;
