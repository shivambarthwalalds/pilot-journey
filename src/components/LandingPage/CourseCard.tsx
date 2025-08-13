"use client";
import Button from "@/components/Common/Button";
import DataFile from "@/Data/DataFile";
import Image from "next/image";
import { FaClockRotateLeft } from "react-icons/fa6";
import Slider from "./Slider";


export default function CourseCard() {
    return (
        <div className=" mb-10">
            <Slider
                breakpoints={{ lg: 3, md: 2 }}
                navigation={true}
                navigatorDots={false}
            >
                {DataFile?.courses?.map((courseData: any, index: number) => (
                    <div
                        key={index}
                        className="bg-white md:mx-3 group rounded-2xl overflow-hidden  transition-shadow duration-300 flex flex-col h-full border border-gray-200"
                    >
                        <div className="relative overflow-hidden">
                            <Image
                                width={1920}
                                height={1080}
                                priority
                                src={courseData?.intro?.src}
                                alt="course image"
                                className="w-full h-72 object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500 z-10" />
                        </div>
                        <div
                            className={`p-3 md:p-5  ${courseData?.intro?.duration ? " h-28 " : "h-20"
                                }`}
                        >
                            <div className="text- flex items-center gap-2 flex-wrap font-semibold  text-gray-800 ">
                                <p className="md:text-lg text-base ">
                                    {" "}
                                    {courseData?.intro?.head}
                                </p>
                                {courseData?.intro?.duration && (
                                    <span className="text-sm flex gap-2 items-center">
                                        <FaClockRotateLeft className="text-sm" />
                                        <span className="font-medium">
                                            {courseData?.intro?.duration}
                                        </span>
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="p-3 md:p-5 flex flex-col justify-between flex-grow">
                            <p className="mt-4 text-sm text-gray-700  border-t border-b border-dashed border-gray-300 py-3">
                                {courseData?.intro?.des}
                            </p>

                            {/* {courseData?.intro?.head === "Flight Simulator" ? (
                                <div className="mt-4">
                                    <span className="inline-block text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                                        Coming Soon
                                    </span>
                                </div>
                            ) : (
                                <div className="mt-4">
                                    <Button
                                        link={`/courses/${courseData?.slug}`}
                                        className="w-full border border-lightBrown text-lightBrown px-4 py-2 rounded-full text-sm font-medium duration-500 hover:bg-lightBrown hover:text-white transition-all"
                                        text="Read More ➜"
                                    />
                                </div>
                            )} */}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
