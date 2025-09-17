import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="w-full h-[90vh] flex lg:flex-row-reverse items-center justify-center flex-col">
      <div className="w-[50%] flex flex-col my-auto">
        <h1 className="text-5xl font-bold bg-gradient-to-t from-[#134e5e] via-[#fff] to-[#e3e3e3] bg-clip-text text-transparent text-5xl font-bold">
          About
        </h1>
        <p className="text-gray-300 mt-4 w-[600px]">
          I am a passionate front-end developer with expertise in creating engaging web experiences. My unique background in both development and music allows me to bring creativity and technical precision to every project.
        </p>
        <p className="text-gray-300 mt-4 w-[600px]">
          MCA - Pursing
          <br />
          BCA - 2024
        </p>
        <div className="mt-5">
          <Link
            to="/projects"
              className="bg-gradient-to-t from-[#134e5e] to-[#0B3037] 
             bg-[length:200%_200%] bg-bottom 
             hover:bg-right
             transition-all duration-700 ease-in-out
             px-3 py-2 rounded-2xl border border-gray-500 text-gray-200"
          >
            View Projects
          </Link>
        </div>
      </div>
      <div className="w-[50%] h-[102%] overflow-hidden flex items-center justify-center">
        <img
          src="https://res.cloudinary.com/diwu3avy6/image/upload/tharani_1_nquktg?_a=DATAdtAAZAA0"
          alt="MS Dharani Image"
          className="drop-shadow-lg rounded-full"
        />
      </div>
    </main>
  );
};

export default About;
