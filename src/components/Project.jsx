import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../../src/App.css";

export default function Project() {
  const projects = [
    { name: "E-Commerce App", desc: "Fullstack MERN project" },
    { name: "Travel Website", desc: "React + API Integration" },
    { name: "Education Platform", desc: "Next.js & MongoDB" },
  ];

  return (
    <section className="project-section">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 50 }} // mulai dari bawah dan transparan
            whileInView={{ opacity: 1, y: 0 }} // muncul ke atas saat terlihat
            transition={{ duration: 0.6, delay: i * 0.2 }} // jeda animasi
            viewport={{ once: true }}
          >
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
