import Card from "@/components/Card";
import React from "react";
import { projects } from "../../constants";

const Projects = () => {
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
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
