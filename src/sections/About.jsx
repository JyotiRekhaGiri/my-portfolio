import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-screen bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center px-6"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center animate-fadeIn">
        {/* Left: Image or placeholder */}
        <div className="flex justify-center">
          <img
            src="https://i.pinimg.com/originals/3a/74/5d/3a745d3dcba72feb73e44e399ec97bea.jpg"
            alt="Profile"
            className="rounded-full shadow-lg w-60 h-60 object-cover"
          />
        </div>

        {/* Right: About Info */}
        <div>
          <h2 className="text-4xl font-bold text-green-800 mb-4">About Me</h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Hello! I'm <span className="font-semibold">Jyoti</span>, a front-end developer with a passion for creating intuitive and visually appealing web applications. I focus on clean code, pixel-perfect UI, and responsive design using technologies like <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>JavaScript</strong>.
          </p>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            I love solving problems, optimizing user experience, and collaborating in fast-paced environments. When I’m not coding, I enjoy exploring new tech trends and contributing to open-source.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="bg-green-700 text-white text-sm px-3 py-1 rounded-full">React</span>
            <span className="bg-green-700 text-white text-sm px-3 py-1 rounded-full">Tailwind CSS</span>
            <span className="bg-green-700 text-white text-sm px-3 py-1 rounded-full">JavaScript</span>
            <span className="bg-green-700 text-white text-sm px-3 py-1 rounded-full">Git</span>
            <span className="bg-green-700 text-white text-sm px-3 py-1 rounded-full">Responsive Design</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
