import React, { useEffect } from "react";
import Skills from "../Skills/Skills";
import Nav from "../Nav/Nav";
import "./Home.scss";

// Animation
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
      console.log("inView");
    }
    if (!inView) {
      controls.start("hidden");
      console.log("not inView");
    }
  }, [controls, inView]);

  const container = {
    hidden: { x: -50, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        staggerChildren: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <div className="Home">
      <div className="header-container">
        <Nav />
        <motion.header variants={container} initial="hidden" animate="show">
          <h1 className="header-title">Ahmad Sandid</h1>
          <p className="job-title">Web Developer</p>
          <p className="blurb">
            From Web Development using frameworks like Angular to UI/UX Design
            or data mining using Machine Learning, I find that being an adaptive
            problem-solver will allow you to excel in about almost any field.
          </p>
        </motion.header>
      </div>
      <Skills ref={ref} variants={container} initial="hidden" animate={controls} />
    </div>
  );
}
