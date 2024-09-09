import React from "react";
import Image from "next/image";
import { logo } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const About: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    var timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 50%",
        end: "top 0%",
        scrub: 2,
      },
    });

    timeline.from("#about #image", {
      opacity: 0,
      delay: 1,
      duration: 1
    })

    timeline.from("#about #aboutme", {
      y: "30px",
      opacity: 0,
      duration: 0.5,
    });

    timeline.from("#about p", {
      y: "30px",
      opacity: 0,
      duration: 0.5,
    });

    timeline.from("#about #skills", {
      y: "30px",
      opacity: 0,
      duration: 0.5,
    });

    timeline.from("#about #svgs",{
      y: "50px",
      opacity: 0,
      duration: 0.7,
      stagger: 0.3
    }, "skillpic")
  }, []);

  return (
    <section id="about" className="h-max lg:p-14 md:p-6 p-4 w-screen">
      <div className="grid grid-cols-1 sm:grid-cols-12 h-full w-full gap-8">
        <div className="col-span-6 h-full w-full hidden md:block lg:flex justify-center items-center">
          <div id="image">
            <Image
              src={"/assets/about-image.png"}
              alt="about"
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className="col-span-6 h-full w-full">
          <h1
            className="text-2xl lg:text-6xl md:text-4xl md:text-left lg:text-left text-center font-extrabold leading-relaxed"
            id="aboutme"
          >
            About Me
          </h1>
          <p className="tracking-wide font-semibold text-gray-800 text-justify leading-relaxed lg:mt-8 mt-2">
            Hello, I am Prem an enthusiastic front-end as-well-as backend
            developer specializing in MERN Stack and creating captivating and
            user-friendly web experiences. I have a solid foundation in
            JavaScript, React.JS, HTML, CSS, Tailwind, Material UI, and
            Bootstrap. I transform imaginative designs into functional websites.{" "}
          </p>
          <h1
            className="text-2xl lg:text-6xl md:text-4xl md:text-left lg:text-left text-center font-extrabold lg:leading-relaxed lg:mt-10 lg:mb-8 my-6"
            id="skills"
          >
            Skills
          </h1>
          <div className="grid lg:grid-cols-5 md:grid-cols-5 grid-cols-3 place-items-center gap-3">
            {logo.map((log, idx) => (
              <div
                key={idx}
                className="p-2 bg-yellow-50 h-16 w-16 flex justify-center items-center rounded-lg hover:scale-110 hover:border-emerald-700 border duration-500"
                id="svgs"
              >
                <Image src={log.icon} alt={log.name} height={40} width={40} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
