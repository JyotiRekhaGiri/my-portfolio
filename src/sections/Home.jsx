import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full h-screen bg-gradient-to-tr from-indigo-100 via-blue-200 to-blue-100 flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center animate-fadeInUp">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
          Hi, I'm <span className="text-indigo-600">Jyoti</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
          Front-End Developer | React Enthusiast
        </h2>

        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          I specialize in crafting beautiful and responsive web applications
          using <strong>React</strong>, <strong>Tailwind CSS</strong>, and modern web technologies.
          Let’s build something amazing together!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md transition duration-300"
          >
            View My Projects
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="/Jyoti_Resume.pdf"
            download
            className="inline-block px-6 py-3 text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
