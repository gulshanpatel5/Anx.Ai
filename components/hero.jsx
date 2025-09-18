"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

import ShinyText from "./ShinyText";
import TextType from "./TextType";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { TextHoverEffectDemo } from "./TextHover";


const HeroSection = () => {
  const imageRef = useRef(null);
  useEffect(() => {
    const imageElement = imageRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else imageElement.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
         {/* <TextHoverEffectDemo/> */}
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title">
            Your AI Career Coach for
            <br />
            Professional success
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            {/* <ShinyText
              text="Unlock your potential with personalized career guidance powered by AI."
              disabled={false}
              speed={3}
              className="custom-class"
            /> */}
            
            <TextType
              text={[
                "Unlock your potential",
                "With personalized career guidance",
                "Powered by AI.",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </p>

          {/* <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
                    Unlock your potential with personalized career guidance powered by AI.
                </p> */}
        </div>

        <div className=" flex justify-center space-x-4">
          <Link href="/dashboard">
            <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      > <span>Get started</span>
      </HoverBorderGradient>
          </Link>
          <Link href="www.youtube.com">
            <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      > <span>Get started</span>
      </HoverBorderGradient> 
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src={"/banner3.jpg"}
              width={1280}
              height={720}
              alt="Banner Anx"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
