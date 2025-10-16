import React from "react";
import "../../src/App.css";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar({ setPage, darkMode, toggleDarkMode }) {
  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <h2 className="logo" onClick={() => setPage("home")}>
        MyPortfolio
      </h2>
      <ul>
        <li onClick={() => setPage("home")}>Home</li>
        <li onClick={() => setPage("skills")}>Skills</li>
        <li onClick={() => setPage("education")}>Education</li>
        <li onClick={() => setPage("projects")}>Projects</li>
        <li onClick={() => setPage("contact")}>Contact</li>
      </ul>
      <div className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </div>
    </nav>
  );
}
