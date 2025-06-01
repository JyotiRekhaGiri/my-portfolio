// components/Navbar.js
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".sidebar") && !e.target.closest(".menu-icon")) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <>
      <nav className="bg-gray-800 text-white fixed w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          {/* Left: Floating FaBars icon */}
          <div className="menu-icon cursor-pointer text-white text-3xl" onClick={() => setSidebarOpen(true)} aria-label="Open sidebar" role="button" tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') setSidebarOpen(true); }}>
            <FaBars />
          </div>

          {/* Right: Branding */}
          <div className="text-xl font-bold">
            My Portfolio
          </div>
        </div>
      </nav>

      {/* Sidebar component */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
