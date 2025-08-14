"use client";
import FormModal from "@/components/Common/FormModal";


import { AppointmentProvider } from "@/context/CreateContaxt";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Link from "next/link";

interface PrimaryLayoutProp {
  children: any;
}

export default function PrimaryLayout({ children }: PrimaryLayoutProp) {


  return (
    <div className=" ">
      <AppointmentProvider>
        <FormModal />
        <Header />
        {children}
        <Footer />
      </AppointmentProvider>


    </div>
  );
}
