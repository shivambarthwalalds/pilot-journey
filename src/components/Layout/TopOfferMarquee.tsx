"use client";
import { motion } from "framer-motion";

interface TopOfferMarqueeProps {
    offers: string[];
    speed?: number; // in seconds
}

export default function TopOfferMarquee({ offers, speed = 15 }: TopOfferMarqueeProps) {
    return (
        <div className="bg-lightBrown text-white font-semibold overflow-hidden py-2 sticky top-0 z-50">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-30%"] }} 
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
                style={{ width: "max-content" }}
            >
             
                <div className="flex">
                    {offers.map((offer, index) => (
                        <span key={`set1-${index}`} className="px-16">
                            {offer}
                        </span>
                    ))}
                </div>
            
                <div className="flex">
                    {offers.map((offer, index) => (
                        <span key={`set2-${index}`} className="px-16">
                            {offer}
                        </span>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
