"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPhone,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin, MdOutlineCall } from "react-icons/md";
import ScrollAnimationLeft from "./Common/ScrollAnimationLeft";
import ScrollAnimationRight from "./Common/ScrollAnimationRight";
import Button from "./Common/Button";
import { useAppointment } from "@/context/CreateContaxt";

export default function Footer() {
    const [toggle, setToggle] = useState<any>(false);
    const currentYear = new Date().getFullYear();
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    const [scrollPercent, setScrollPercent] = useState(0);
    const ticking = useRef(false);
    const { setAppointmentForm }: any = useAppointment();

    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    const scrollTop = window.scrollY;
                    const docHeight = document.body.scrollHeight - window.innerHeight;
                    const scrolled = (scrollTop / docHeight) * 100;
                    setScrollPercent(scrolled);
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const translateX = Math.min(scrollPercent * 10, 1300);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const aboutLinks = [
        { label: "About Us", src: "/about-us" },
        { label: "Blogs", src: "/blogs" },
        { label: "Get In Touch", src: "/contact-us" },
        { label: "Privacy Policy", src: "/privacy-policy" },
        { label: "Terms & Conditions", src: "/terms-conditions" },
        { label: "DGCA Pariksha", href: "https://pariksha.dgca.gov.in/home" },
        { label: "eGCA Portal", src: "https://www.dgca.gov.in/digigov-portal/jsp/dgca/common/login.jsp" },
        { label: "Class 1 Medical", src: "https://www.dgca.gov.in/digigov-portal/?page=jsp/dgca/InventoryList/personal/medical/class1/Class1.pdf" },
        { label: "Class 2 Medical", src: "https://www.dgca.gov.in/digigov-portal/?page=jsp/dgca/InventoryList/personal/medical/class2/Class2.pdf" },
    ];
    const tourPackages = [
        {
            label: "PPL (Ground Training + Flight Training)",
            src: "/courses/ppl",
        },
        {
            label: "CPL Ground Training",
            src: "/courses/cpl-ground-training",
        },
        {
            label: "CPL Flight Training",
            src: "/courses/cpl-flight-training",
        },
        {
            label: "Flight Simulator",
            src: "/courses/flight-simulato",
        },
        {
            label: "Airline preparation",
            src: "/courses/airline-preparation",
        },
    ];

    const socialIcons = [
        {
            id: 1,
            icon: <FaFacebookF />,
            link: "https://www.facebook.com/pilotspathway.in",
        },
        {
            id: 2,
            icon: <FaLinkedinIn />,
            link: " https://www.linkedin.com/company/106989291/ ",
        },
        {
            id: 3,
            icon: <FaXTwitter />,
            link: "https://x.com/PilotsPathway",
        },
        {
            id: 4,
            icon: <FaInstagram />,
            link: "https://www.instagram.com/pilotspathway.in/",
        },
        {
            id: 5,
            icon: <AiOutlineYoutube />,
            link: "https://www.youtube.com/channel/UCQoCQPuvFfNdLkp1Qdwlmow",
        },
    ];

    const contactDetails = [
        {
            icon: <FaPhone />,
            label: "Phone",
            value: (
                <>
                    <Link href="tel:+91-9257047450" legacyBehavior>
                        +91 9257047450
                    </Link>
                    <br />
                    <Link href="tel:+91-9257047451" legacyBehavior>
                        +91 9257047451
                    </Link>
                </>
            ),
        },
        {
            icon: <IoMdMail />,
            label: "Email",
            value: (
                <>
                    <Link href="mailto:counsellor@pilotspathway.in" legacyBehavior>
                        counsellor@pilotspathway.in
                    </Link>
                    <br />
                    <Link href="mailto:admissions@pilotspathway.in" legacyBehavior>
                        admissions@pilotspathway.in
                    </Link>
                </>
            ),
        },
        {
            icon: <MdLocationPin />,
            label: "Address",
            value:
                // <Link href="https://maps.app.goo.gl/2dWdhuk1nrimeyzj6" target="_blank">
                "First floor, A-25, Jawahar Lal Nehru Marg, Sector 9, Malviya Nagar, Jaipur, Rajasthan 302017",
            // </Link>
        },
    ];

    return (
        <footer
            ref={containerRef}
            className="bg-gray-800 overflow-hidden relative px-6 md:px-16 lg:px-32 pt-12 lg:pt-20   text-customWhite bg-waves bg-contain bg-center bg-no-repeat"
        >
            <div className="">
                <div className="  pb-8 mb-4 flex flex-col md:flex-row md:justify-between md:items-center ">
                    <div>
                        <ScrollAnimationLeft>
                            <p className="text-2xl lg:text-4xl font-bold  mt-2 font-librebaskerville capitalize">
                                Your journey, our mission.
                            </p>
                        </ScrollAnimationLeft>
                        <ScrollAnimationLeft>
                            <div className="flex gap-2 items-center mt-2">
                                <div className="bg-lightBrown p-2 rounded-full">
                                    <MdOutlineCall className="text-white h-4 w-4" />
                                </div>

                                <p className="text-sm xl:text-base my-6 lg:my-0  font-medium text-customWhite ">
                                    Call Us : +91 9257047450 , +91 9257047451
                                </p>
                            </div>
                        </ScrollAnimationLeft>
                    </div>

                    <ScrollAnimationRight>
                        <Button
                            onClick={() => setAppointmentForm(true)}
                            icon={<GiAirplaneDeparture className="h-5 w-5 animate-pulse" />}
                            className=" w-fit  cursor-pointer font-librebaskerville text-white bg-lightBrown rounded-3xl font-semibold px-6 py-3  flex items-center gap-2 shadow-md transition"
                            text="Enquire Now"
                        />
                    </ScrollAnimationRight>
                </div>
            </div>

            {/* <div className=" bg-gray-800  flex  flex-row   flex-wrap  items-start  py-14  lg:py-12 ">
        <Image
          src={AppAssets?.key_points_left}
          alt="Jet Safety"
          width={200}
          height={350}
          className={`absolute hidden xl:block left-0 top-36 transition-transform duration-500 ease-in-out`}
          style={{
            transform: `translateX(${translateX}px)`,
          }}
        /> */}

            <div
                className={`  border-t border-dotted  border-gray-400 bg-gray-800  flex  flex-row   flex-wrap  items-start  py-14  lg:py-12 ${isVisible ? "w-[100%]" : "w-20"
                    } `}
            >
                <div className=" w-[70%]  lg:w-1/4  group">
                    <ScrollAnimationRight>
                        <h3 className="text-lg font-semibold text-lightBrown  pb-1">
                            Contact Us
                            <p className="h-0.5 w-14 group-hover:w-28 bg-lightBrown transition-all duration-500"></p>
                        </h3>
                        <div className="space-y-2">
                            {contactDetails.map((item: any, index: any) => (
                                <div
                                    key={index}
                                    className={`text-sm  flex items-start  gap-1 ${index === 0 ? "mt-3" : ""
                                        }`}
                                >
                                    <p className="flex items-center text-nowrap gap-1">
                                        {item?.icon} {item?.label} :
                                    </p>
                                    <p>{item?.value}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex space-x-3 text-lg pt-5">
                            {socialIcons.map(({ id, icon, link }) => (
                                <div
                                    key={id}
                                    className="border hover:border-lightBrown group rounded-full p-2 overflow-hidden"
                                >
                                    <Link href={link} className="cursor-pointer" target="_blank">
                                        <span
                                            className={`block transition-all duration-500 hover:scale-150 text-sm  hover:text-lightBrown`}
                                        >
                                            {icon}
                                        </span>
                                    </Link>
                                </div>
                            ))}
                        </div>{" "}
                    </ScrollAnimationRight>
                </div>

                <div className=" w-1/2 lg:w-1/4 group lg:flex justify-center py-10 lg:py-0">
                    <ScrollAnimationRight>
                        <h3 className="text-lg font-semibold text-lightBrown  pb-1">
                            Quick Links
                            <p className="h-0.5 w-14 group-hover:w-full bg-lightBrown transition-all duration-500"></p>
                        </h3>
                        <div className="mt-3 flex flex-col space-y-2 text-sm">
                            {aboutLinks.map((item: any, index: any) => (
                                <Link
                                    href={item?.src || item?.href}
                                    key={index}
                                    className="hover:scale-105 cursor-pointer transition-all duration-500 hover:text-lightBrown"
                                >
                                    {item?.label}
                                </Link>
                            ))}
                        </div>
                    </ScrollAnimationRight>
                </div>

                <div className="  w-1/2 lg:w-1/4 group   py-10 lg:py-0 ">
                    <ScrollAnimationLeft>
                        <h3 className="text-lg font-semibold text-lightBrown  pb-1">
                            Our Courses
                            <p className="h-0.5 w-14 group-hover:w-28 bg-lightBrown transition-all duration-500"></p>
                        </h3>
                        <div className="mt-3 flex-col flex space-y-2 text-sm">
                            {tourPackages.map((item: any, index: any) => (
                                <Link
                                    href={item?.src}
                                    key={index}
                                    className="hover:scale-105 cursor-pointer transition-all duration-500 hover:text-lightBrown"
                                >
                                    {item?.label}
                                </Link>
                            ))}
                        </div>
                    </ScrollAnimationLeft>
                </div>

                <div className=" w-[95%]   lg:w-1/4 ">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6965977289024!2d75.80128777543723!3d26.849600776684962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5ddbff9f15d%3A0xb4dc20ec758191e4!2sPilotsPathway!5e0!3m2!1sen!2sin!4v1745575745899!5m2!1sen!2sin"
                        width="100%"
                        height="250"
                        className="border-0"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <p
                className={`border-b border-dotted mx-auto border-gray-400 mb-5 transition-all duration-1000 ${isVisible ? "w-[100%]" : "w-20"
                    }`}
            ></p>

            <div className="w-[90%]   md:w-full text-center text-xs py-8   ">
                <ScrollAnimationRight>
                    <p>
                        &copy; Copyright {currentYear} PilotsPathway All rights reserved.
                        Designed by{" "}
                        <Link href="https://www.aladinntech.com/" target="_blank">
                            {" "}
                            ALDS{" "}
                        </Link>
                    </p>
                </ScrollAnimationRight>
            </div>
        </footer>
    );
}
