import React from "react";
import "./Visualart";
import "./Visualart.scss";
import Nav from "../Nav/Nav";

export default function visualart() {
  return (
    <div className="visualart">
      <div className="header-container">
        <Nav />
        <section className="gallery">
          <div className="heading">Visual Art Pieces</div>
          <div className="subheading">Works // 2022</div>
          <div className="box">
            <div className="dream" id="dream1">
              <img
                src={require('../../resources/assets/img/visualart/Face Paint.jpg')}
                alt=""
              />
              <img
                src={require('../../resources/assets/img/visualart/chrome effect 2 8mb.jpg')}
                alt=""
              />
              <img
                src={require('../../resources/assets/img/visualart/Etherial Venice for instagram.jpeg')}
                alt=""
              />
              <img
                src={require('../../resources/assets/img/visualart/ethereal (1).jpg')}
                alt=""
              />
              <img src={require('../../resources/assets/img/photo/IMG_0975.jpg')} alt="" />
            </div>
            <div className="dream">
              <img
                src={require('../../resources/assets/img/visualart/iredescenttapei.jpg')}
                alt=""
              />
              {/* <img id="video" src={require('../../resources/assets/img/visualart/liquify background.jpg" alt=""> */}
              <img
                src={require('../../resources/assets/img/visualart/Mohammad Hadid.jpg')}
                alt=""
              />
              <img
                src={require('../../resources/assets/img/visualart/liquify background.jpg')}
                alt=""
              />
              <img
                src={require('../../resources/assets/img/visualart/grainy constellation.jpeg')}
                alt=""
              />
              <img src={require('../../resources/assets/img/photo/IMG_0738.jpg')} alt="" />
            </div>
            <div className="dream" id="dream3">
              <video
                className="galleryVideo"
                src={require('../../resources/assets/img/visualart/Lion animacion.mp4')}
                autoPlay
                loop
                muted
              />
              <video
                className="galleryVideo"
                src={require('../../resources/assets/img/visualart/final animation frank ocean.mp4')}
                autoPlay
                loop
                muted
              />
              <img
                src={require('../../resources/assets/img/visualart/syrant edited.png')}
                alt=""
              />
              <img src={require('../../resources/assets/img/photo/IMG_0651.jpg')} alt="" />
              <img
                src={require('../../resources/assets/img/visualart/IMG_0135.jpg')}
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
