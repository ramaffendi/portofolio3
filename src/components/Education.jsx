import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../../src/App.css";

export default function Education() {
  return (
    <motion.section
      className="education-section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Education</h2>
      <div className="edu-card">
        <h3>Universitas Contoh</h3>
        <p>Sarjana Sistem Informasi (2019 - 2023)</p>
        <p>IPK: 3.75</p>
      </div>
    </motion.section>
  );
}
