import React from "react";
import Skills from '../Skills/Skills';
import Nav from '../Nav/Nav';
import './Home.scss';

export default function Home() {
  return (
    <div className="Home">
      <div className="header-container">
        <Nav />
        <header>
          <h1 className="header-title">Ahmad Sandid</h1>
          <p className="job-title">Web Developer</p>
          <p className="blurb">
            From Web Development using frameworks like Angular to UI/UX Design
            or data mining using Machine Learning, I find that being an adaptive
            problem-solver will allow you to excel in about almost any field.
          </p>
        </header>
      </div>
      <Skills />
    </div>
  );
}
