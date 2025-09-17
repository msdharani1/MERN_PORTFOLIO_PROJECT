import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <main className="flex items-center flex-col justify-center mt-10">
      <h1 className="text-5xl font-bold bg-gradient-to-t from-[#134e5e] via-[#fff] to-[#e3e3e3] bg-clip-text text-transparent text-5xl font-bold">
        My Projects
      </h1>
      <p className="text-gray-300 text-center mt-4 w-[600px] mb-10">
        Explore my latest work showcasing modern web development, creative
        design solutions, and cutting-edge technologies
      </p>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <ProjectCard name="IntelliqAI" link="https://intelliqai.msdharani.com/" />
        <ProjectCard name="TubeSeek" link="https://tubeseek.msdharani.com/music" />
        <ProjectCard name="Music Portfolio" link="https://music.msdharani.com/covers" />
        <ProjectCard name="Development Portfolio" link="https://dev.msdharani.com"/>
        <ProjectCard name="My Space" link="https://msdharani.com"/>
        <ProjectCard name="Vinayaga Crackers" link="https://www.srivinayakacrackers.com/ordernow"/>
      </div>
    </main>
  );
};

export default Projects;
