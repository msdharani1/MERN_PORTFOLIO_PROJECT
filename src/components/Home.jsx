import React from "react";
import CV from "../assets/THARANI_M_RESUME.pdf";

const Home = () => {
  return (
    <main className="w-full h-[90vh] flex lg:flex-row items-center justify-center flex-col">
      <div className="w-[50%] flex flex-col my-auto">
        <h1 className="text-5xl font-bold bg-gradient-to-t from-[#134e5e] via-[#fff] to-[#e3e3e3] bg-clip-text text-transparent text-5xl font-bold">
          I'm MS Dharani
        </h1>
        <p className="text-gray-300 mt-4">
          Passionate about creating responsive and user-friendly <br /> web
          experiences.
        </p>
        <div className="mt-5">
          <a
            href=""
            download={CV}
              className="bg-gradient-to-t from-[#134e5e] to-[#0B3037] 
             bg-[length:200%_200%] bg-bottom 
             hover:bg-right
             transition-all duration-700 ease-in-out
             px-3 py-2 rounded-2xl border border-gray-500 text-gray-200"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="w-[500px] h-[102%] overflow-hiddent relative flex items-end">
        <img
          src="https://dev.msdharani.com/assets/pic-n3YjnL4m.webp"
          alt="MS Dharani Image"
          className="drop-shadow-lg"
        />
      </div>
    </main>
  );
};

export default Home;
