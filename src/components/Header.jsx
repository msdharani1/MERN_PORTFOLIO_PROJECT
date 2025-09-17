import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-22 w-full bg-[#0B3037] flex justify-between items-center px-5">
      <div>
        <h1 className="text-white text-2xl font-bold">
          <Link to="/">MS Dharani</Link>
        </h1>
      </div>
      <nav className="text-white flex gap-5">
        <Link to="/"><i className="fa-solid fa-house pr-2"></i>Home</Link>
        <Link to="/about"><i className="fa-solid fa-user pr-2"></i>About</Link>
        <Link to="/projects"><i className="fa-solid fa-code pr-2"></i>Projects</Link>
        <Link to="/contact"><i className="fa-solid fa-message pr-2"></i>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
