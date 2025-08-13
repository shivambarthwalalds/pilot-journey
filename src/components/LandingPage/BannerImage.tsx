"use client";
import { useState } from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import ScrollAnimationYAxis from "../Common/ScrollAnimationYAxis";
import { AppAssets } from "@/constants/Assets";
import Button from "../Common/Button";
import { FaAnglesDown } from "react-icons/fa6";
import FormSection from "./FormSection";

const BannerImage = () => {
    return (
        <>
            <div className="relative ">
                <div className="  hidden xl:block">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className=" w-full   object-contain"
                        poster={AppAssets.Introimage}
                    >
                        <source src={AppAssets.Intro} type="video/mp4" />
                        <track
                            src={AppAssets.Intro}
                            kind="subtitles"
                            srcLang="en"
                            label="English"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="block   xl:hidden">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-[100vh] w-full   object-cover"
                        poster={AppAssets.Introimage}
                    >
                        <source src={AppAssets.Intro} type="video/mp4" />
                        <track
                            src={AppAssets.Intro}
                            kind="subtitles"
                            srcLang="en"
                            label="English"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="absolute inset-0 w-full bg-black/70"></div>

                <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center  p-5 md:p-0">
                    <div className="flex flex-col items-start md:w-[60%] pt-24 md:pt-0  ">
                        <ScrollAnimationYAxis>
                            <h1 className=" text-2xl lg:text-[50px] xl:text-[50px] capitalize  text-center md:text-left tracking-wide md:leading-12 xl:leading-16 text-customWhite ">
                                Your Journey to the Cockpit Starts Here
                            </h1>
                        </ScrollAnimationYAxis>

                        <ScrollAnimationYAxis>
                            <p className="  text-customWhite text-base text-center md:text-left w-full lg:text-lg   py-6   ">
                                We don’t just train you – we prepare you for global airline careers.
                            </p>

                            <a
                                href="#pilots-pathway"
                                className="cursor-pointer  flex flex-col items-center md:items-start space-y-[2px] mt-6 "
                            >
                                <Button
                                    text={"  Apply Now – Limited Seats!"}
                                    className="bg-lightBrown hover:bg-darkBlue transition-all duration-500 flex-row-reverse cursor-pointer  text-white px-6 py-3 rounded-full font-semibold shadow-md flex items-center gap-2"
                                ></Button>
                            </a>
                        </ScrollAnimationYAxis>
                    </div>
                    <div className="md:w-[30%] w-full  md:mt-10 mt-5 hidden md:block">
                        <FormSection />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerImage;
