import React from "react";
import "./Dev.scss";
import Nav from "../Nav/Nav";

export default function dev() {
  return (
    <div className="dev">
      <div className="header-container">
        <Nav />
        <section className="devProjects">
          <h1 className="heading">Freelance Projects</h1>
          <p className="subheading">
            All these Projects Below have links to the source code on Github.
          </p>
          <div className="box">
            <a href className="projectDisplay" />
          </div>
          <div className="card">
            <div className="img-container" id="img-1">
              <div
                href="https://github.com/ahmad1702/Delta-Tablet-SignUp-Python"
                target="_blank"
                className="viewProject">
                View on Github
              </div>
              <img src={require('../../resources/assets/img/dev/deltacropped.jpg')} alt="" />
            </div>
            {/* <img src={require("../../resources/assets/img/dev/deltacropped.jpg")} alt="" srcset="" /> */}
            <div className="card-content">
              <h1>Delta Business Solutions (Python)</h1>
              <p>
                Worked with Delta Business Solutions to create a program for
                their signup portal made entirely in Python, including the
                medium GUI. This was later redeveloped to connect with their
                backend, and after that had to be disclosed. But the base code
                that was written entirely on my end is shown here. A user can
                create or delete an account. Usually this would be used on a
                tablet by the front desk. In this example it writes to a word
                file, but when my project was approved we used API to send
                requests to their server, increasing the scalability of the
                product.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="img-container" id="img-2">
              <div
                href="https://github.com/ahmad1702/Delta-Tablet-SignUp-Python"
                target="_blank"
                className="viewProject">
                View on Github
              </div>
              <img
                src="https://github.com/ahmad1702/Cognatic/raw/main/assets/img/headerscreenshot.png"
                alt=""
              />
            </div>
            {/* <img src="../../resources/assets/img/dev/deltapythonadvancedscreenshot.jpg" alt="" srcset=""> */}
            <div className="card-content">
              <h1>Dynamic Ticketing System</h1>
              <p>
                Created a ticketing system using HTML/SCSS/JS for the UI and PHP
                for everything else. On login, a user can go to a dashboard that
                displays all modules and tickets relevent to them. I was only
                permitted to show the complete front end without the PHP code,
                and only the javascript pertaining to the UI interaction.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="overflowStyling"></div>
    </div>
  );
}
