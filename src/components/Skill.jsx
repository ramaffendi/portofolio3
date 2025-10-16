import React from "react";
import "../../src/App.css";
import { motion as Motion } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

export default function Skill() {
  const skills = [
    { icon: <FaReact />, name: "ReactJS" },
    { icon: <FaNode />, name: "Node.js" },
    { icon: <FaDatabase />, name: "MongoDB" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
  ];

  return (
    <section className="skill-section">
      <h2>My Skills</h2>
      <div className="skill-grid">
        {skills.map((s, i) => (
          <Motion.div
            key={i}
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="icon">{s.icon}</div>
            <p>{s.name}</p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
