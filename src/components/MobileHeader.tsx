"use client";
import { AppAssets } from "@/constants/Assets";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IMobileHeader {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    menuItems: any;
    isScrolled: any;
}

export default function MobileHeader({
    isOpen,
    setIsOpen,
    menuItems,
    isScrolled,
}: IMobileHeader) {
    const pathName = usePathname();
    // for stop backgroup scrolling
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>
            <div
                className={`xl:hidden block   fixed z-[990] px-5 
   ${isScrolled
                        ? " text-darkBlue  rounded-[40px] left-3 top-5  backdrop-blur-[1px] bg-customWhite/90 h-20  w-[95%]  "
                        : " text-customWhite w-full"
                    }
    `}
            >
                <div className="flex justify-between items-center  w-full">
                    <div className="w-20 h-20">
                        <Link href={pathName == "/" ? "#header" : "/"}>
                            <Image
                                src={isScrolled ? AppAssets?.whiteLogo : AppAssets?.blackLogo}
                                alt="Logo"
                                width={1920}
                                height={1080}
                                priority
                                className="w-full h-full object-contain"
                            />
                        </Link>
                    </div>

                    <div className=" w-full  md:flex  justify-end items-center lg:gap-3 md:w-[40%] lg:w-[28%]">
                        {/* <Button
              text="CALL: +62 876-543-210"
              className="bg-lightBrown hidden md:block  cursor-pointer font-librebaskerville p-3 px-5 text-lg rounded-full"
            /> */}

                        {/* Hamburger Menu */}
                        <div className="flex justify-end ">
                            <div
                                className="flex flex-col gap-1 z-20  top-5 right-10 xl:hidden 
              items-center justify-center w-10 h-10 cursor-pointer rounded-md transition-all duration-300"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {/* First Bar */}
                                <span
                                    className={`block h-1 w-6   ${isScrolled ? "bg-black" : "bg-white"
                                        } rounded transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""
                                        }`}
                                ></span>
                                {/* Middle Bar */}
                                <span
                                    className={`block h-1 w-6 rounded  ${isScrolled ? "bg-black" : "bg-white"
                                        } transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
                                ></span>
                                {/* Last Bar */}
                                <span
                                    className={`block h-1 w-6 rounded  ${isScrolled ? "bg-black" : "bg-white"
                                        } transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""
                                        }`}
                                ></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* dropdown */}
                <div
                    className={` mt-2  w-full  bg-customWhite   rounded-lg 
              transition-all duration-500 ease-in-out transform ${isOpen ? "translate-y-0" : "-translate-y-[600px] "
                        }`}
                >
                    <nav className="flex gap-6 flex-col p-4 text-gray-700">
                        {menuItems.map((item: any, index: number) => (
                            <div key={index} className="relative py-2">
                                <Link
                                    href={item?.url}
                                    className={`flex gap-2 items-center ${pathName == item?.url ? "border-b-2" : "border-b-0"
                                        }  border-lightBrown w-fit font-bold text-lg   text-left`}
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                    }}
                                >
                                    {item?.label}
                                    {item?.icon}
                                </Link>
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
}
