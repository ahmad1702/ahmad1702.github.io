import React from "react";
import "./Photo.scss";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav"

export default function photo() {
  return (
    <div className="photo">
      <div className="header-container">
        <Nav />
        <section className="gallery">
          <div className="heading">Photography</div>
          <div className="subheading">Works // 2022</div>
          <div className="box">
            <div className="dream" id="dream1">
              <img src={require("../../resources/assets/img/photo/IMG_0755.png")} alt="" />
              <img src={require("../../resources/assets/img/photo/IMG_2367.jpg")} alt="" />
              <img src={require("../../resources/assets/img/photo/IMG_0714.jpg")} alt="" />
              <img src={require("../../resources/assets/img/photo/IMG_0651.jpg")} alt="" />
              {/* Always keep this last */}
              <img src={require("../../resources/assets/img/photo/IMG_0975.jpg")} alt="" />
            </div>
            <div className="dream">
              <img src={require("../../resources/assets/img/photo/IMG_0652-3.jpg")} alt="" />
              <img src={require("../../resources/assets/img/photo/IMG_0738.jpg")} alt="" />
              <img src={require("../../resources/assets/img/photo/IMG_2431.jpg")} alt="" />
              <img src={require("../../resources/assets/img/photo/IMG_2705.jpg")} alt="" />
              <img src={require("../../resources/assets/img/photo/IMG_0738.jpg")} alt="" />
            </div>
            <div className="dream" id="dream3">
              <img src={require("../../resources/assets/img/photo/IMG_0651.jpg")} alt="" />
              <img src={require("../../resources/assets/img/photo/IMG_0755.png")} alt="" />
              <img src={require("../../resources/assets/img/photo/IMG_2527.jpg")} alt="" />
              <img src={require("../../resources/assets/img/photo/IMG_0651.jpg")} alt="" />
              <img src={require("../../resources/assets/img/photo/IMG_0651.jpg")} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
