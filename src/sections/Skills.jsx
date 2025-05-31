import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const skillsData = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-white py-16 px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        My <span className="text-blue-500">Skills</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl w-full animate-fadeIn">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg transform hover:scale-105 transition duration-300 hover:shadow-2xl"
          >
            <div className="text-5xl mb-4">{skill.icon}</div>
            <p className="text-lg font-medium text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
