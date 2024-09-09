import Card from "@/components/Card";
import React from "react";
import { projects } from "../../constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Projects: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {

    var timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        scroller: "body",
        start: "top 50%",
        end: "top 0%",
        scrub: 2,
      },
    });

    timeline.from("#projects h1", {
      y: 30,
      opacity: 0,
      duration: 0.5,
    });

    timeline.from(
      "#projects .top-left",
      {
        x: -300,
        opacity: 0,
        duration: 0.8,
      },
      "anim1"
    );
    timeline.from(
      "#projects .top-right",
      {
        x: 300,
        opacity: 0,
        duration: 0.8,
      },
      "anim1"
    );
    timeline.from(
      "#projects .bottom-left",
      {
        x: -300,
        opacity: 0,
        duration: 0.8,
      },
      "anim2"
    );
    timeline.from(
      "#projects .bottom-right",
      {
        x: 300,
        opacity: 0,
        duration: 0.8,
      },
      "anim2"
    );
  }, []);

  return (
    <section id="projects" className="w-screen h-max lg:p-14 md:p-6 p-4">
      <h1 className="text-2xl lg:text-6xl md:text-4xl md:text-left lg:text-left text-center font-extrabold leading-relaxed">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-12 lg:gap-12 gap-6 lg:mt-8 mt-2">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            href={project.href}
            classname={project.classname}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
