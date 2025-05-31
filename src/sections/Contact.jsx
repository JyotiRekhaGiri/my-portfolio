import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center p-6"
    >
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Side: Contact Form */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8 text-pink-600">Contact Me</h2>
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! (This is a mock submission)");
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded hover:bg-pink-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Image with Floating Social Icons */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Contact Visual"
            className="w-full h-full object-cover"
          />

          {/* Floating Social Icons */}
          <div className="absolute top-8 right-8 flex flex-col space-y-6 p-3 rounded-lg bg-white bg-opacity-70 shadow-lg">
            {[
              { href: "mailto:youremail@example.com", icon: <FaEnvelope />, title: "Email" },
              { href: "https://github.com/your-github", icon: <FaGithub />, title: "GitHub" },
              { href: "https://linkedin.com/in/your-linkedin", icon: <FaLinkedin />, title: "LinkedIn" },
              { href: "https://twitter.com/your-twitter", icon: <FaTwitter />, title: "Twitter" },
            ].map(({ href, icon, title }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
                className="text-pink-600 hover:text-pink-800 transition rounded-full bg-white p-2 shadow-md flex items-center justify-center w-12 h-12"
              >
                <span className="text-4xl">{icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
