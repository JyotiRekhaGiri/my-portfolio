import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        
        {/* Left Side: Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">© {new Date().getFullYear()} Jyoti's Portfolio</h2>
          <p className="text-sm text-gray-400">Built with React & Tailwind CSS</p>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="mailto:youremail@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
            title="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
