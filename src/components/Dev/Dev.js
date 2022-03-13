import React, { useEffect } from "react";
import "./Dev.scss";
import Nav from "../Nav/Nav";

function Dev() {
  // // useEffect(() => {
  // //   console.log("wafl;kajljfjafjw waterrrrrrr")
  // // });
  // let img1 = document.getElementById("img-1");
  // let img2 = document.getElementById("img-2");

  // let checkBox = document.getElementById("mobilenavcheck");

  // checkBox.addEventListener(
  //   "change",

  //   function githubButtonFix() {
  //     img1.style.transition = "all 2s";
  //     if (checkBox.checked == true) {
  //       img1.style.opacity = "0";

  //       // img1.classList.add("minus");
  //     } else {
  //       img1.style.opacity = "1";
  //       // img1.classList.remove("minus");
  //     }
  //   }
  // );
  // var img = new Image();
  // img.onload = function () {
  //   alert(this.width + "x" + this.height);
  // };
  // img.src = "http://www.google.com/intl/en_ALL/images/logo.gif";
  // const showResolution = () => {
  //   console.log(this.width + "x" + this.height);
  // }
  // const imgs = document.getElementsByTagName("img");
  // const imgslist = Array.prototype.slice.call(imgs);
  // // for (let i = 0; i < imgs.length; i++) {
  // //   console.log();
  // // }
  // // imgs.forEach(function(node) {
  // //   console.log(this.width + "x" + this.height);
  // // });
  // imgslist.forEach(showResolution());

  // imgs.onload = function () {
  //   console.log(this.width + "x" + this.height);
  // };
  // React.Dom.body.style.background = ""
  return (
    <div className="dev">
        {/* background: url("../../resources/assets/img/dev/blue3dgradient.jpg");
        background-size: cover;
        background-position: center;
        background-attachment: fixed; */}
        
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
            <div className="img-container" id="img-2">
              <div
                href="https://github.com/ahmad1702/Delta-Tablet-SignUp-Python"
                target="_blank"
                className="viewProject"
              >
                View on Github
              </div>
              <img
                src={require("../../resources/assets/img/dev/ticketscreenshot.png")}
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

          <div className="card">
            <div className="img-container" id="img-3">
              <div
                href="https://github.com/ahmad1702/ahmad1702.github.io"
                target="_blank"
                className="viewProject"
              >
                View on Github
              </div>
              <img
                src={require("../../resources/assets/img/dev/thiswebsite.png")}
                alt=""
              />
            </div>
            {/* <img src="../../resources/assets/img/dev/deltapythonadvancedscreenshot.jpg" alt="" srcset=""> */}
            <div className="card-content">
              <h1>This Porfolio Website</h1>
              <p>
                This website was created with React in order to have a dynamic
                website that can be updated quickly and efficiently. The update
                source code for this portfolio can be found in the github above.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="img-container" id="img-1">
              <div
                href="https://github.com/ahmad1702/Delta-Tablet-SignUp-Python"
                target="_blank"
                className="viewProject"
                id="viewProject"
              >
                View on Github
              </div>
              <img
                src={require("../../resources/assets/img/dev/deltacropped.jpg")}
                alt=""
                id="rock"
              />
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
        </section>
      </div>
      <div className="overflowStyling"></div>
    </div>
  );
}

export default Dev;
