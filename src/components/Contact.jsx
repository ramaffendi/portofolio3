import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../../src/App.css";

export default function Contact() {
  return (
    <motion.section
      className="contact-section"
      initial={{ opacity: 0, y: 50 }} // mulai agak ke bawah
      whileInView={{ opacity: 1, y: 0 }} // animasi muncul ke atas
      transition={{ duration: 0.6 }} // durasi 0.6 detik
      viewport={{ once: true }} // hanya animasi sekali
    >
      <h2>Contact Me</h2>
      <p>Email: myname@example.com</p>
      <p>LinkedIn: linkedin.com/in/myname</p>
    </motion.section>
  );
}
