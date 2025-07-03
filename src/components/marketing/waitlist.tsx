"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import Particles from "../ui/particles";
import ShiftingCountdown from "../ui/countdown-timer";

const Waitlist = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container className="py-20 max-w-6xl mx-auto">
                <div className="relative flex flex-col items-center justify-center py-12 lg:py-20 px-0 rounded-2xl lg:rounded-3xl bg-background/20 text-center border border-foreground/20 overflow-hidden">
                    <Particles
                        refresh
                        ease={80}
                        quantity={120}
                        color="#d4d4d4"
                        className="hidden lg:block absolute inset-0 z-0"
                    />
                    <Particles
                        refresh
                        ease={80}
                        quantity={105}
                        color="#d4d4d4"
                        className="block lg:hidden absolute inset-0 z-0"
                    />

                    <motion.div
                        className="absolute -bottom-1/8 left-1/3 -translate-x-1/2 w-44 h-32 lg:h-52 lg:w-1/3 rounded-full blur-[5rem] lg:blur-[10rem] -z-10"
                        style={{
                             background: "conic-gradient(from 180deg at 50% 50%, #6366f1, #8b5cf6, #ec4899, #6366f1)",
                        }}
                        animate={{
                            rotate: 360
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
{/* Heading + subheading */}
<div className="text-center mb-6 space-y-0.5">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight">
    iOS Release
  </h1>
  <p className="text-base sm:text-lg text-gray-300 font-light font-grotesk">
    Releasing Quide for iOS on <span className="font-medium">Sept 4, 2025</span>
  </p>
</div>

{/* Countdown timer */}
<ShiftingCountdown />

                </div>
            </Container>
        </div>
    )
};

export default Waitlist
