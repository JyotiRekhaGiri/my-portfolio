import React from "react";
import Navbar from "./components/Navbar";  // Navbar component
import Home from "./sections/Home";        // Home section
import About from "./sections/About";      // About section
import Projects from "./sections/Projects"; // Projects section
import Contact from "./sections/Contact";  // Contact section
import Footer from "./components/Footer";
import Skills from "./sections/Skills";

// Main App component
function App() {
  return (
    <>
      {/* Navbar always at the top */}
      <Navbar />

      {/* Main content with padding at the top to account for fixed Navbar */}
      <main className="pt-16">
        <Home />        {/* Home Section */}
        <About />      {/* About Section */}
        <Projects />   {/* Projects Section */}
        <Skills />
        <Contact />    {/* Contact Section */}
      </main>
      <Footer/>
    </>
  );
}

export default App;
