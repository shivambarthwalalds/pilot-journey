"use client";
import ScrollAnimationLeft from "@/components/Common/ScrollAnimationLeft";

import MainHeading from "../Common/MainHeading";
import ScrollAnimationYAxis from "../Common/ScrollAnimationYAxis";
import CourseCard from "./CourseCard";

export default function HomeCourse() {
    return (
        <div id="courses" className=" px-4 md:px-16 lg:px-32">
            <div className="text-center">
                <ScrollAnimationYAxis>
                    <MainHeading
                        color={"text-black"}
                        title="Courses We Offer"
                        subtitle="Choose the Right Path for Your Aviation Career"
                    />
                </ScrollAnimationYAxis>
            </div>

            <div className=" pt-5 mt-10 ">
                <div className="w-full   md:pb-10 ">
                    <CourseCard />
                </div>
            </div>
        </div>
    );
}
