import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white fixed w-full z-10 shadow">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-lg font-bold">My Portfolio</div>
        <div className="space-x-4">
          {["Home", "About", "Projects", "Contact", "Skills"].map(section => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="hover:text-blue-400 transition"
            >
              {section}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
