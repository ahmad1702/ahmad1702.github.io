import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

document.getElementById("img-1").addEventListener("click", function(){
  window.open('https://github.com/ahmad1702/Delta-Tablet-SignUp-Python', '_blank');
});

document.getElementById("img-2").addEventListener("click", function(){
  window.open('https://github.com/ahmad1702/Cognatic', '_blank');
});

const delta = {
  name: "Water",
  url: "https://github.com/ahmad1702/Delta-Tablet-SignUp-Python",
}
