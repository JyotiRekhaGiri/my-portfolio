import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages / Sections
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Skills from "./sections/skills";

function App() {
  return (
    <>
      {/* Navbar always visible */}
      <Navbar />

      {/* Routed pages */}
      <main className="pt-16">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Skills />
                <Contact />
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer always visible */}
      <Footer />
    </>
  );
}

export default App;
