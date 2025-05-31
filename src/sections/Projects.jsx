import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills. It includes smooth scrolling, responsive sections, and elegant design.",
    image: "https://marketplace.canva.com/EAFwckKNjDE/2/0/1600w/canva-black-white-grayscale-portfolio-presentation-vzScEqAI__M.jpg", // Place actual image in public/images/
  },
  {
    title: "E-commerce App",
    description:
      "A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment integration using Stripe API.",
    image: "https://images04.nicepage.com/feature/612016/ecommerce.jpg",
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat app using Socket.io and React, featuring private messaging, group chat rooms, and user presence detection.",
    image: "https://d33v4339jhl8k0.cloudfront.net/docs/assets/589c78fadd8c8e73b3e9710e/images/5da9f5f92c7d3a7e9ae2bd5d/file-zUo4LH2VhX.png",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 py-16 px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        Projects
      </h2>

      <div className="space-y-16 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Description */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
