import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Photo from "../Photo/Photo";
import Dev from "../Dev/Dev";
import VisualArt from "../VisualArt/Visualart";
import ErrorPage from "../Error/ErrorPage";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Nav() {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
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

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  };
  return (
    <div>
      <motion.nav variants={container} className="main-nav" initial="hidden" animate="show">
        <div className="logo">
          <Link to="/">
            <h1 id="water">AHMAD</h1>
          </Link>
        </div>
        <div className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/development">Development</Link>
          </li>
          <li>
            <Link to="/visualart">Visual Art</Link>
          </li>
          <li>
            <Link to="/photography">Photography</Link>
          </li>
          {/* <Link to="#">
            <li>Design</li>
          </Link> */}
        </div>
      </motion.nav>
      <nav className="mobilenavigation">
        <div id="menuToggle" className="animated animatedFadeInUp fadeInUp">
          <input type="checkbox" id="mobilenavcheck"/>
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/development">Development</Link>
            </li>
            <li>
              <Link to="/visualart">Visual Art</Link>
            </li>
            <li>
              <Link to="/photography">Photography</Link>
            </li>
            {/* <Link to="">
              <li>Design</li>
            </Link> */}
          </ul>
        </div>
        <div className="mobilelogo">
          <Link to="/">
            <h1 id="water">AHMAD</h1>
          </Link>
        </div>
      </nav>
    </div>
  );
}
