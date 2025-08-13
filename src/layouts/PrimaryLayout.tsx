"use client";
import FormModal from "@/components/Common/FormModal";


import { AppointmentProvider } from "@/context/CreateContaxt";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Link from "next/link";

import { useState } from "react";

import { motion } from "framer-motion";
import TopOfferMarquee from "@/components/Layout/TopOfferMarquee";
interface PrimaryLayoutProp {
  children: any;
}

export default function PrimaryLayout({ children }: PrimaryLayoutProp) {
  const [open, setopen] = useState(false);
  const offers = [
    "Upto ₹15 Lakh Scholarship for Top Performing Students",
    "25% Off on Ground Classes for Female Cadets",
  ];
  return (
    <div className=" ">

     <TopOfferMarquee offers={offers} speed={15} />
      <AppointmentProvider>
        <FormModal />
        <Header />
        {children}
        <Footer />
      </AppointmentProvider>


    </div>
  );
}
