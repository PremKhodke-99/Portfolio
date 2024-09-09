"use client";

import { navbarItem } from "../../constants";
import Link from "next/link";
import React, { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    gsap.from("#nav div #logo, #nav div div #link", {
      y: -20,
      opacity: 0,
      delay: 1,
      duration: 0.7,
      stagger: 0.2,
    });

    var timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -100%",
        end: "top -105%",
        markers: true,
        scrub: 1
      },
    });

    timeline.to("#nav", {
      height: "48px",
      paddingTop: "16px",
      paddingBottom: "16px",
    });
  }, []);

  return (
    <>
      <nav
        className="z-50 fixed w-screen bg-black border-b border-yellow-200 flex items-center justify-between text-violet-50 lg:h-20 lg:p-8 lg:px-14 md:h-16 md:p-6 h-12 p-4"
        id="nav"
      >
        <div>
          <Link
            href={"/"}
            className="lg:text-3xl font-bold cursor-pointer md:text-2xl sm:text-xl text-yellow-300"
            id="logo"
          >
            PBK.
          </Link>
        </div>
        <div className="block md:hidden">
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className="border border-yellow-100 p-1 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 stroke-[2px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(false)}
              className="border border-yellow-200 p-1 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 stroke-[2px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="hidden md:block md:w-auto" id="tabs">
          <div className="flex gap-20">
            {navbarItem.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="text-lg font-medium"
                id="link"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {isOpen && <MenuOverlay setIsOpen={setIsOpen} />}
    </>
  );
};

export default Navbar;
