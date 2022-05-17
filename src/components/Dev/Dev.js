import React, { useEffect, useRef } from "react";
import "./Dev.scss";
import Nav from "../Nav/Nav";

import { TweenMax, Power3 } from "gsap";

function Dev() {
  let logoItem = useRef("water");
  console.log(logoItem);
  return (
    <div className="dev">
      {/* background: url("../../resources/assets/img/dev/blue3dgradient.jpg");
        background-size: cover;
        background-position: center;
        background-attachment: fixed; */}

      <div className="header-container">
        <div className="mobilenav">
          <Nav />
        </div>
        <section className="devProjects">
          <h1 className="heading">Dev Projects</h1>
          <p className="subheading">
            All these Projects Below have links to the source code on Github.
          </p>
          <div className="card">
            <a
              className="img-container"
              id="img-1"
              href="https://github.com/ahmad1702/YouAreEl"
              target="_blank"
            >
              <div className="viewProject">View on Github</div>
              {/* <img
                src={require("../../resources/assets/img/dev/youareelscreenshot.png")}
                alt=""
              /> */}
            </a>
            {/* <img src="../../resources/assets/img/dev/deltapythonadvancedscreenshot.jpg" alt="" srcset=""> */}
            <div className="card-content">
              <h1>YouAreEl Shortener</h1>
              <p>
                Built completely with Flask. A user can enter a short code for a
                website or file, and when they go to YouAreEl.herokuapp.com and
                add their codename to the end of the domain like
                'http.../codenamehere', it will redirect them to that site.
              </p>
              <a href="https://youareel.herokuapp.com/" target="_blank">
                Check out the live site here
              </a>
            </div>
          </div>
          <div className="card">
            <a
              className="img-container"
              id="img-2"
              href="https://github.com/ahmad1702/TransLang"
              target="_blank"
            >
              <div className="viewProject">View on Github</div>
              {/* <img
                src={require("../../resources/assets/img/dev/translangscreenshot.png")}
                alt=""
              /> */}
            </a>
            {/* <img src="../../resources/assets/img/dev/deltapythonadvancedscreenshot.jpg" alt="" srcset=""> */}
            <div className="card-content">
              <h1>Translang</h1>
              <p>
                Created with React and D3.js. Translate text quickly and
                efficiently with this simple, nice to use app. Configure the two
                lanauages you would like to using the dropdowns, enter the text
                in the first half, and click the translate button to translate
                the text.
              </p>
              <a href="https://translang.surge.sh/" target="_blank">
                Check out the live site here
              </a>
            </div>
          </div>
          <div className="card">
            <a
              className="img-container"
              id="delta-img"
              href="https://github.com/ahmad1702/delta-ui"
              target="_blank"
            >
              <div className="viewProject">View on Github</div>
              {/* <img
                src={require("../../resources/assets/img/dev/translangscreenshot.png")}
                alt=""
              /> */}
            </a>
            {/* <img src="../../resources/assets/img/dev/deltapythonadvancedscreenshot.jpg" alt="" srcset=""> */}
            <div className="card-content">
              <h1>Delta React Website</h1>
              <p>
                Created with React and Three.js. Creating a modern website with
                a 3D animation for a consulting firm.
              </p>
              <a href="https://deltaui1.surge.sh/" target="_blank">
                Check out the live site here
              </a>
            </div>
          </div>
          <div className="card">
            <a
              className="img-container"
              id="vetzu-img"
              href="https://github.com/ahmad1702/Vetzu"
              target="_blank"
            >
              <div className="viewProject">View on Github</div>
              {/* <img
                src={require("../../resources/assets/img/dev/translangscreenshot.png")}
                alt=""
              /> */}
            </a>
            {/* <img src="../../resources/assets/img/dev/deltapythonadvancedscreenshot.jpg" alt="" srcset=""> */}
            <div className="card-content">
              <h1>IT Services Site</h1>
              <p>
                Using the vanilla HTML/CSS/JS stack. A modern UI focused static
                site for a small business.
              </p>
              <a href="https://vetzuui1.surge.sh/" target="_blank">
                Check out the live site here
              </a>
            </div>
          </div>
          <div className="card">
            <a
              href="https://github.com/ahmad1702/Ngoku"
              target="_blank"
              className="img-container"
              id="ngoku-img"
            >
              <div
                href="https://github.com/ahmad1702/Ngoku"
                target="_blank"
                className="viewProject"
              >
                View on Github
              </div>
              {/* <img
                src={require("../../resources/assets/img/dev/thiswebsite.png")}
                alt=""
              /> */}
            </a>
            {/* <img src="../../resources/assets/img/dev/deltapythonadvancedscreenshot.jpg" alt="" srcset=""> */}
            <div className="card-content">
              <h1>Ngoku</h1>
              <p>
                In development of a inventory tracking website using PHP and
                MySQL. The user can add items to the inventory, and can view all
                items in the inventory. The user can also add a new item to the
                inventory. The user can also edit an item in the inventory. The
                user can also delete an item in the inventory. The user can also
                view all items in the inventory.
              </p>
              <a
                href="http://localhost:8888/Ngoku/public_html/index.php"
                target="_blank"
              >
                Check out the live site here
              </a>
            </div>
          </div>
          <div className="card">
            <a
              className="img-container"
              id="img-3"
              href="https://github.com/ahmad1702/Cognatic"
              target="_blank"
            >
              <div className="viewProject">View on Github</div>
              {/* <img
                src={require("../../resources/assets/img/dev/ticketscreenshot.png")}
                alt=""
              /> */}
            </a>
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
            <a
              href="https://github.com/ahmad1702/ahmad1702.github.io"
              target="_blank"
              className="img-container"
              id="img-4"
            >
              <div
                href="https://github.com/ahmad1702/ahmad1702.github.io"
                target="_blank"
                className="viewProject"
              >
                View on Github
              </div>
              {/* <img
                src={require("../../resources/assets/img/dev/thiswebsite.png")}
                alt=""
              /> */}
            </a>
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
            <a
              href="https://github.com/ahmad1702/PawwPetShop"
              target="_blank"
              className="img-container"
              id="paw-img"
            >
              <div
                href="https://github.com/ahmad1702/PawwPetShop"
                target="_blank"
                className="viewProject"
              >
                View on Github
              </div>
              {/* <img
                src={require("../../resources/assets/img/dev/thiswebsite.png")}
                alt=""
              /> */}
            </a>
            {/* <img src="../../resources/assets/img/dev/deltapythonadvancedscreenshot.jpg" alt="" srcset=""> */}
            <div className="card-content">
              <h1>Paww Petshop</h1>
              <p>
                Using Angular, I am developing a pet shop website. The user can
                add pets to the shop, and can view all pets in the shop.
                <br />
                Currently, we are developing the UI, and the backend will be in
                Nest.js, using Prisma.js encapsulate our MySQL Database.
              </p>
              <a href="http://pawwpetshop.surge.sh" target="_blank">
                Check out the live site here
              </a>
            </div>
          </div>
          <div className="card">
            <a
              className="img-container"
              id="img-5"
              href="https://github.com/ahmad1702/Delta-Tablet-SignUp-Python"
              target="_blank"
            >
              <div
                href="https://github.com/ahmad1702/Delta-Tablet-SignUp-Python"
                target="_blank"
                className="viewProject"
                id="viewProject"
              >
                View on Github
              </div>
              {/* <img
                src={require("../../resources/assets/img/dev/deltacropped.jpg")}
                alt=""
                id="rock"
              /> */}
            </a>
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
            <a
              className="img-container"
              id="amjad-img"
              href="https://github.com/ahmad1702/TransLang"
              target="_blank"
            >
              <div className="viewProject">View on Github</div>
              {/* <img
                src={require("../../resources/assets/img/dev/translangscreenshot.png")}
                alt=""
              /> */}
            </a>
            {/* <img src="../../resources/assets/img/dev/deltapythonadvancedscreenshot.jpg" alt="" srcset=""> */}
            <div className="card-content">
              <h1>Backend Portfolio</h1>
              <p>
                Using Angular, created a website that can be updated quickly.
              </p>
              <a href="https://hamzaamjad.surge.sh/" target="_blank">
                Check out the live site here
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className="overflowStyling"></div>
    </div>
  );
}

export default Dev;
