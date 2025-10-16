import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Education from "./components/Education";
import Project from "./components/Project";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <Navbar
        setPage={setPage}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <div className="content">
        {page === "home" && <Home />}
        {page === "skills" && <Skill />}
        {page === "education" && <Education />}
        {page === "projects" && <Project />}
        {page === "contact" && <Contact />}
      </div>
      <Footer />
    </div>
  );
}
