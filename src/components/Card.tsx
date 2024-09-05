import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectType {
  title: string;
  description: string;
  image: string;
  href: string;
}

const Card = ({ title, description, image, href }: ProjectType) => {
  return (
    <div
      className={`col-span-6 place-self-center w-full lg:h-[300px] h-[225px] box-shadow rounded-xl relative overflow-hidden bg-black`}
    >
      <Image src={image} alt={title} fill className="scale-[1.01]" />
      <div className="w-full h-full bg-black absolute opacity-0 hover:opacity-90 duration-500 ease-in-out flex flex-col justify-center items-center">
        <h1 className="text-emerald-50 uppercase text-6xl font-bold ">
          {title}
        </h1>
        <Link
          href={href}
          target="_blank"
          className="text-white font-light gap-40 mt-16 border-[0.5px] border-gray-300 px-4 py-2 rounded-full hover:text-black hover:bg-emerald-50 duration-300"
        >
          Link
        </Link>
      </div>
    </div>
  );
};

export default Card;
