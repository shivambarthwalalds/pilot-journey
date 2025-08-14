"use client";
import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import img1 from "../../../public/facility/1.png";
// import img2 from "../../../../public/gallery/OurGallery06.png";
import img3 from "../../../public/facility/3.png";
import img4 from "../../../public/facility/2.png";
import img5 from "../../../public/facility/6.png";
// import img6 from "../../../../public/gallery/OurGallery08.png";
// import img7 from "../../../../public/facility/4.png";
import img8 from "../../../public/gallery/OurGallery04.png";
import img9 from "../../../public/facility/5.png";
import img10 from "../../../public/facility/3.png";
import img11 from "../../../public/gallery/OurGallery06.png";
import img12 from "../../../public/gallery/OurGallery12.png";
import MainHeading from "@/components/Common/MainHeading";
import ScrollAnimationLeft from "@/components/Common/ScrollAnimationLeft";
import ScrollAnimationYAxis from "@/components/Common/ScrollAnimationYAxis";
import { FaCheckCircle } from "react-icons/fa";

const images = [
    // img2.src,
    // img6.src,
    // img7.src,
    img4.src,
    img8.src,
    img3.src,
    img1.src,
    img5.src,
    img12.src,
    img10.src,
    img9.src,
    img11.src,
];

const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const features = [
        "DGCA-Approved Programs",
        "Airline-Experienced Instructors",
        "State-of-the-Art Flight Simulator",
        "Industry-Aligned Curriculum",
        "1-on-1 Pilot Mentorship",
    ];
    return (
        <div className="py-10 md:py-16 lg:py-18 px-5 md:px-10 xl:px-32  mx-auto">
            <div className="text-center max-w-3xl mx-auto  ">
                <ScrollAnimationYAxis>
                    <p className="space-x-2 ">
                        <span className="text-xl text-lightBrown md:text-3xl font-semibold space-x-1">
                            India’s Most Trusted Pilot
                        </span>
                        <span className="text-xl text-black md:text-3xl font-semibold space-x-1">
                            Training Institute  Facility
                        </span>
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed py-2">
                        At <span className="font-semibold">PilotsPathway</span>, we turn aspiring pilots into aviation leaders.
                        Train with airline-experienced captains through DGCA-approved programs, using our
                        state-of-the-art flight simulator and an industry-focused curriculum built for global aviation standards.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6  md:text-left">
                        {features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <FaCheckCircle className="text-lightBrown text-xl flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </ScrollAnimationYAxis>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full mx-auto gap-4 mt-10">
                {[...Array(3)].map((_, colIndex) => (
                    <div className="grid gap-4" key={colIndex}>
                        {[0, 1, 2].map((rowIndex) => {
                            const imgIndex = colIndex * 3 + rowIndex;
                            const src = images[imgIndex];
                            return (
                                <div key={imgIndex}>
                                    <Image
                                        src={src}
                                        alt={`Gallery image ${imgIndex}`}
                                        width={1920}
                                        height={1080}
                                        priority
                                        className="h-auto w-full rounded-lg object-cover cursor-pointer"
                                        onClick={() => {
                                            setIndex(imgIndex);
                                            setOpen(true);
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

            {open && (
                <Lightbox
                    plugins={[Thumbnails, Zoom]}
                    open={open}
                    close={() => setOpen(false)}
                    index={index}
                    slides={images.map((src) => ({ src }))}
                    zoom={{
                        maxZoomPixelRatio: 3, // Default is 2
                        zoomInMultiplier: 2, // How much to zoom in per zoom step
                        doubleTapDelay: 300, // ms delay for double-tap zoom
                        doubleClickDelay: 300, // ms delay for double-click zoom
                        doubleClickMaxStops: 2, // How many zoom stops double-click does
                    }}
                />
            )}
        </div>
    );
};

export default Gallery;
