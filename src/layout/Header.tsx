"use client";
import { AppAssets } from "@/constants/Assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about-us" },
    { label: "Courses", url: "/courses" },
    { label: "How to become a pilot", url: "/how-to-become-a-pilot" },
    { label: "Blogs", url: "/blogs" },
    { label: "Contact Us", url: "/contact-us" },
  ];

  return (
    <>
      <div
        id="header"
        className={`hidden xl:block w-full max-w-[2150px] left-1/2 -translate-x-1/2 fixed z-[990] transition-all duration-700 ${
          isScrolled
            ? "xl:w-[85%]  rounded-[40px] top-10 shadow-full backdrop-blur-[1px] bg-customWhite/90 text-darkBlue"
            : "w-full text-customWhite"
        }`}
      >
        <div className="px-10 pt-2">
          <div className="flex items-center justify-between  w-full ">
            <div className="w-56 xl:w-24 pb-2  h-20 cursor-pointer  ">
              <Link href="/">
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
            <div className="flex items-center gap-6 xl:gap-4">
              <nav className="flex gap-8 p-4">
                {menuItems.map((item: any, index: number) => (
                  <div key={index} className="relative py-2">
                    <Link
                      href={item?.url}
                      // className="relative cursor-pointer text-nowrap font-medium p-2 transition-colors duration-300
                      // before:absolute abefore:inset-0 before:w-full before:h-full before:border-b-2 before:border-lightBrown
                      // before:scale-0 before:origin-bottom-center before:transition-transform before:duration-500 before:ease-in-out
                      // hover:before:scale-100"
                      className={`relative cursor-pointer ${
                        pathName == item?.url ? "border-b-2" : "border-b-0"
                      } border-lightBrown text-nowrap font-medium p-2 transition-colors duration-300 
                      before:absolute before:inset-0 before:w-full before:h-full ${
                        pathName !== item?.url
                          ? "before:border-b-2"
                          : "before:border-b-0"
                      }   before:border-lightBrown 
                      before:scale-0 before:origin-bottom-center before:transition-transform before:duration-500 before:ease-in-out 
                      hover:before:scale-100`}
                    >
                      {item?.label} {item?.icon}
                    </Link>
                  </div>
                ))}
              </nav>
              {/* <div className="text-white">
                <Button
                  onClick={() => setToggle(!toggle)}
                  icon={
                    <GiAirplaneDeparture className="h-5 w-5 animate-pulse" />
                  }
                  text="Enquire Now"
                  className="bg-lightBrown text-customWhite cursor-pointer font-semibod  p-3 px-8   rounded-full text-base"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <MobileHeader
        isScrolled={isScrolled}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        menuItems={menuItems}
      />

      {/* <Modal
        onClose={() => setToggle(!toggle)}
        isOpen={toggle}
        title={
          <p className="text-lg font-semibold text-darkBlue">Contact Us</p>
        }
      >
        <Form />
      </Modal> */}
    </>
  );
}

export default Header;
