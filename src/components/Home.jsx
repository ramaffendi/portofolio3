import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../../src/App.css";

export default function Home() {
  return (
    <motion.section
      id="home"
      className="home-section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="home-content">
        <img
          src="https://i.imgur.com/4AiXzf8.jpeg"
          alt="Profile"
          className="profile-img"
        />

        <h1>
          Hi, I’m <span className="highlight">Rama 👋</span>
        </h1>
        <p>
          I’m a <strong>Fullstack Developer (MERN Stack)</strong> who loves
          building clean, responsive, and user-friendly web apps with modern
          tech.
        </p>

        <a href="#contact" className="contact-btn">
          Contact Me
        </a>
      </div>
    </motion.section>
  );
}
