import React from "react";
import "./home.css";
import { motion } from "framer-motion";

function Home() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="intro-container"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <h1 className="intro-heading">Welcome to My Portfolio</h1>
      <p className="intro-paragraph">
        My name is John Doe and I am a web developer based in XYZ city. I
        specialize in building responsive and user-friendly web applications
        using ReactJS and other modern web technologies.
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="btn"
      >
        View My Projects
      </motion.button>
    </motion.div>
  );
}

export default Home;
