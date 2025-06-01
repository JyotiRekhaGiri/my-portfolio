import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Image Animation */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-photo/blank-black-corporate-stationery-on-600nw-1051434977.jpg')",
          filter: "brightness(0.7)", // Optional: Slight darkening for text contrast
        }}
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "loop" }}
      />

      <div className="max-w-4xl text-center z-10 animate-fadeInUp text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-yellow-400">Jyoti</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium mb-6">
          Front-End Developer | React Enthusiast
        </h2>

        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Front-End Developer with a strong foundation in <strong>React</strong>,{" "}
          <strong>Tailwind CSS</strong>, and modern web technologies. Passionate
          about creating responsive, user-friendly interfaces that deliver
          exceptional user experiences. Seeking an opportunity to contribute to
          innovative teams and build scalable, performance-driven web applications.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            to="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md transition duration-300"
          >
            View My Projects
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="/Jyoti_Resume.pdf"
            download
            className="inline-block px-6 py-3 text-white border border-white hover:bg-white hover:text-indigo-700 rounded-lg transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
