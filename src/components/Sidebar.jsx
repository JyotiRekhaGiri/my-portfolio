// components/Sidebar.js
import React from "react";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaTools,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  const links = [
    { to: "/", icon: <FaHome />, label: "Home" },
    { to: "/about", icon: <FaUser />, label: "About" },
    { to: "/projects", icon: <FaProjectDiagram />, label: "Projects" },
    { to: "/skills", icon: <FaTools />, label: "Skills" },
    { to: "/contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40"></div>
      )}

      {/* Sidebar */}
      <aside
        className={`sidebar fixed top-0 left-0 h-full bg-gray-900 text-white z-50 transform transition-transform duration-300 w-64 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 h-16 border-b border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <div
            onClick={onClose}
            className="text-white text-2xl cursor-pointer hover:text-red-400 transition"
            aria-label="Close sidebar"
            role="button"
            tabIndex={0}
            onKeyPress={(e) => { if (e.key === 'Enter') onClose(); }}
          >
            <FaTimes />
          </div>
        </div>

        <nav className="flex flex-col mt-6 space-y-4 px-4">
          {links.map(({ to, icon, label }, index) => (
            <Link
              key={index}
              to={to}
              onClick={onClose}
              className="flex items-center gap-4 py-2 px-3 rounded hover:bg-gray-700 hover:text-yellow-400 transition"
            >
              <span className="text-xl">{icon}</span>
              <span className="text-md font-medium">{label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

