"use client";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import ScrollAnimation from "./ScrollAnimation";

interface IAccordion {
  faqs: { question: string; answer: string }[];
}

export default function Accordion({ faqs }: IAccordion) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {faqs.map((faq: any, index: any) => (
        <ScrollAnimation
          direction={index % 2 !== 0 ? "left" : "right"}
          key={index}
          xOffset={-200}
          gap={0.3}
          index={index}
        >
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-md mb-4  xl:mb-6"
          >
            <button
              className="w-full flex justify-between  text-gray-700 items-start xl:items-center p-4 text-left font-semibold  cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              {faq?.question}
              <BiChevronDown
                className={`w-8 h-6  transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-[max-height]  duration-500 ease-in-out ${
                openIndex === index ? "max-h-52" : "max-h-0"
              }`}
            >
              <div className="p-3 border-t border-gray-300 text-sm leading-6 text-gray-600">
                {faq?.answer}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  );
}
