"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Arrow from '../../public/assets/arrow-right-up-line.svg'

interface ProjectType {
  title: string;
  description: string;
  image: string;
  href: string;
}

const Card: React.FC<ProjectType> = ({ title, description, image, href }) => {
  const [isHover, setIsHover] = useState(false);

  useGSAP(() => {
    gsap.from("div div h1 #a", {
      y: 70,
      opacity: 1,
      duration: 0.5,
      stagger: 0.2,
    });
  }, [isHover]);

  return (
    <div
      className={`col-span-6 place-self-center w-full lg:h-[300px] h-[225px] box-shadow rounded-xl relative overflow-hidden bg-black`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Image src={image} alt={title} fill className="scale-[1.01]" />
      <div className="w-full h-full bg-black absolute opacity-0 hover:opacity-90 duration-500 ease-in-out flex flex-col justify-center items-center">
        <h1 className="text-emerald-50 uppercase text-6xl font-bold font-sans">
          {title.split("").map((letter, idx) => (
            <span key={idx} id="a">
              {letter}
            </span>
          ))}
        </h1>
        <Link
          href={href}
          target="_blank"
          className="text-white font-light mt-16 border-[0.5px] border-gray-300 px-4 py-2 rounded-full hover:text-black hover:bg-emerald-50 duration-300 flex gap-2"
        >
          <Image src={Arrow} alt="arrow" width={20} height={20} className="text-white"/>
          <p>Link</p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
