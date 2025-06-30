import { cn } from "@/lib";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import Ripple from "../ui/ripple";

const Integration = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20">
      {/* mobile / tablet view */}
      <Container className="relative">
        <div className="relative flex flex-col lg:hidden items-center justify-center overflow-visible">
          <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-3/5 h-14 lg:h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full -rotate-12 blur-[6.5rem] -z-10" />

          <div className="max-w-sm w-full h-auto mx-auto mt-8">
            <Image
              src="/images/gemini.png"
              alt="Gemini"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>

      {/* headings & CTA */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto lg:absolute lg:top-1/4 inset-x-0 mt-12 lg:mt-0">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-semibold !leading-snug">
          Gemini 2.5 Integration
        </h2>
      </div>

      {/* desktop view with ripple */}
      <Container delay={0.3}>
        <div className="relative hidden lg:flex items-center justify-center overflow-visible">
          <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-3/5 h-14 lg:h-20 bg-gradient-to-r from-blue-400 to-indigo-700 rounded-full -rotate-12 blur-[6.5rem] -z-10" />

          <div className="relative flex h-dvh w-full flex-col items-center justify-center overflow-visible">
            <Ripple />
          </div>

          {/* Gemini logo in the centre (plain <img>) */}
          <div className="absolute z-20 flex items-center justify-center group">
            <img
              src="/images/gemini.png"
              alt="Gemini logo"
              className="size-24 group-hover:scale-110 transition-all duration-500"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Integration;
