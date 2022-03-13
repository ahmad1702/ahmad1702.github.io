import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

let img1 = document.getElementById("img-1");
let img2 = document.getElementById("img-2");

let checkBox = document.getElementById("mobilenavcheck");

checkBox.addEventListener(
  "change",

  function githubButtonFix() {
    img1.style.transition = "all 2s";
    if (checkBox.checked == true) {
      img1.style.opacity = "0";

      // img1.classList.add("minus");
    } else {
      img1.style.opacity = "1";
      // img1.classList.remove("minus");
    }
  }
);

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    img1.addEventListener("mouseover", function () {
      window.open(
        "https://github.com/ahmad1702/Delta-Tablet-SignUp-Python",
        "_blank"
      );
    });

    img2.addEventListener("mouseover", function () {
      window.open("https://github.com/ahmad1702/Cognatic", "_blank");
    });
  } else {
    img1.addEventListener("click", function () {
      window.open(
        "https://github.com/ahmad1702/Delta-Tablet-SignUp-Python",
        "_blank"
      );
    });

    img2.addEventListener("click", function () {
      window.open("https://github.com/ahmad1702/Cognatic", "_blank");
    });
  }
}

var x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
// x.addEventListener(myFunction); // Attach listener function on state changes
