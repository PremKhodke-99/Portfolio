"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero: React.FC = () => {
  useGSAP(() => {
    gsap.from("#heading", {
      y: 200,
      duration: 1,
      opacity: 0,
    });

    gsap.from("#heroimg", {
      y: -200,
      duration: 1,
      opacity: 0,
    });
  }, []);
  
  return (
    <BackgroundBeamsWithCollision>
      <section
        className="lg:py-20 lg:px-14 md:py-16 py-12 h-screen w-full lg:p-8 md:p-6 p-4 text-white relative"
        id="home"
      >
        <div className="h-full grid grid-cols-1 sm:grid-cols-12">
          <div
            className="col-span-8 place-self-center text-center sm:text-left sm:justify-self-start"
            id="heading"
          >
            <h1 className="lg:text-7xl md:text-5xl text-4xl font-extrabold lg:leading-normal md:leading-normal leading-snug">
              <span className="lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-800 to-yellow-600">
                Hey there!, I&apos;m{" "}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Prem Khodke",
                  1000,
                  "Frontend Developer",
                  1000,
                  "Web Developer",
                  1000,
                  "Full Stack Developer",
                  1000,
                  "Freelancer",
                  1000,
                  () => {
                    console.log("Sequence completed");
                  },
                ]}
                wrapper="span"
                speed={50}
                cursor={true}
                repeat={Infinity}
              />
            </h1>
            <p className="text-gray-300 font-semibold my-6 leading-relaxed">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications
            </p>
            <div className="mt-4 sm:mt-8">
              <Link
                href={"#contact"}
                className="inline-block w-full sm:w-fit bg-gradient-to-r from-pink-600 to-yellow-600 px-6 py-3 mr-4 font-medium tracking-wide rounded-full"
              >
                Hire Me
              </Link>
              <Link
                href={"/cv/PREM_KHODKE.pdf"}
                target="_blank"
                download={"Prem Khodke, Full Stack Web Developer CV"}
                className="inline-block w-full sm:w-fit bg-gradient-to-r from-pink-600 to-yellow-600 font-medium px-1 py-1 tracking-wide rounded-full mt-3"
              >
                <span className="block px-5 py-2 bg-black rounded-full">
                  Download CV
                </span>
              </Link>
            </div>
          </div>
          <div className="col-span-4 place-self-center lg:mt-0" id="heroimg">
            <div className="rounded-full bg-slate-950 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
              <Image
                src="/assets/hibernate.png"
                alt="heroImg"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;
