import React, { useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const skillsData = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" />,
    proficiency: "Highly Proficient – 4+ years of experience building semantic HTML structures.",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500" />,
    proficiency: "Advanced – Strong understanding of layouts, flex/grid, and animations.",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400" />,
    proficiency: "Advanced – Core language knowledge including ES6+, DOM, and APIs.",
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400" />,
    proficiency: "Advanced – Proficient in hooks, component architecture, and state management.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
    proficiency: "Highly Proficient – Rapid UI building with utility-first CSS.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    proficiency: "Intermediate – Experience in backend logic and Express.js.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
    proficiency: "Intermediate – Familiar with document-based data modeling.",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-red-500" />,
    proficiency: "Highly Proficient – Daily use with version control and team collaboration.",
  },
];

const Skills = () => {
  const [flipped, setFlipped] = useState(Array(skillsData.length).fill(false));

  const toggleFlip = (index) => {
    setFlipped((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-white py-16 px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        My <span className="text-blue-500">Skills</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            onClick={() => toggleFlip(index)}
            className="cursor-pointer perspective"
          >
            <div
              className={`relative w-full h-48 transition-transform duration-700 transform-style-preserve-3d ${
                flipped[index] ? "rotate-y-180" : ""
              }`}
            >
              {/* Front Side */}
              <div className="absolute w-full h-full bg-white shadow-lg rounded-lg flex flex-col items-center justify-center backface-hidden p-6">
                <div className="text-5xl mb-4">{skill.icon}</div>
                <p className="text-lg font-medium text-gray-700">
                  {skill.name}
                </p>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full bg-white shadow-lg rounded-lg transform rotate-y-180 flex items-center justify-center backface-hidden p-6">
                <p className="text-sm text-gray-600 text-center">
                  {skill.proficiency}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tailwind CSS Custom Utility */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default Skills;
