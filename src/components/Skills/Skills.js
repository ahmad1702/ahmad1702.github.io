import React from "react";
import "./Skills.scss";

export default function Skills() {
  return (
    <section className="summary">
      <div className="container-lg">
        <h1 className="heading">My Skills</h1>
        <div className="programming">
          <div className="categories">
            <div className="col">
              <h2>Web Development:</h2>
              <ul>
                <li>HTML</li>
                <li>CSS + SCSS/Sass</li>
                <li>
                  Angular
                  <ul>
                    <li>Angular Material Design</li>
                    <li>NgxCharts</li>
                    <li>MDBootstrap</li>
                    <li>Router Animation</li>
                  </ul>
                </li>
                <li>Typescript</li>
                <li>
                  Javascript:
                  <ul>
                    <li>JQuery</li>
                    <li>AJAX</li>
                    <li>ES6</li>
                    <li>Anime.js</li>
                    <li>Three.js</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col">
              <h2>Data Science:</h2>
              <ul>
                <li>Python</li>
                <li>SQL</li>
                <li>Numpy</li>
                <li>Selenium</li>
                <li>Web Scraping</li>
                <li>Jupyter Notebook + Google Colab</li>
                <li>Data Cleaning w/ Python</li>
              </ul>
            </div>
            <div className="col">
              <h2>Software Engineering:</h2>
              <ul>
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
                <li>Swift</li>
                <li>Visual Basic</li>
                <li>
                  GUI Subsets/Libraries:
                  <ul>
                    <li>Tkinter</li>
                    <li>PySimpleGUI</li>
                    <li>Swing</li>
                    <li>Small Basic</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
