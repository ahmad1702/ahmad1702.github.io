import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Photo from "../Photo/Photo";
import Dev from "../Dev/Dev";
import VisualArt from "../VisualArt/Visualart";
import ErrorPage from "../Error/ErrorPage";

export default function Nav() {
  return (
    <div>
      <nav className="main-nav">
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
      </nav>
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
