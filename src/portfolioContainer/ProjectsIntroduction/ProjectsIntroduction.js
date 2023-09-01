import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../uitilities/ScreenHeading/screenHeading";
import ScrollService from "../../uitilities/ScrollService";
import Animations from "../../uitilities/Animations";

// importing images of projects
import lady from "../../../src/img/ProjectsIntroduction/Animation1.gif";
import mike from "../../../src/img/ProjectsIntroduction/Animation2.gif";
import man from "../../../src/img/ProjectsIntroduction/Animation3.gif";
import ma2 from "../../../src/img/ProjectsIntroduction/Animation4.gif";
import man3 from "../../../src/img/ProjectsIntroduction/Animation5.gif";
import man4 from "../../../src/img/ProjectsIntroduction/Animation6.gif";

// import footer shape
import shape from "../../../src/img/ProjectsIntroduction/shape-bg.png";
import "./ProjectsIntroduction.css";
export default function ProjectsIntroduction(props) {
  // Function to handle fading in screen
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // Subscribe to the fadeInScreenHandler using ScrollService

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  // Configuration options for OwlCarousel
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },

      1000: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Projects Preview"}
        subHeading={"A preview to some of my projects."}
      />
      <section
        className="ProjectsIntroduction-section fade-in"
        id={props.id || ""}
      >
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="ProjectsIntroduction-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <a href="https://www.google.com" target="_blank">
                        I patronized
                      </a>
                    </p>
                  </div>
                  <div className="project-info">
                    <img src={lady} alt="no internet connection"></img>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <a href="https://www.google.com" target="_blank">
                        I patronized
                      </a>
                    </p>
                  </div>
                  <div className="project-info">
                    <img src={mike} alt="no internet connection"></img>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <a href="https://www.google.com" target="_blank">
                        I patronized
                      </a>
                    </p>
                  </div>
                  <div className="project-info">
                    <img src={man} alt="no internet connection"></img>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <a href="https://www.google.com" target="_blank">
                        I patronized
                      </a>
                    </p>
                  </div>
                  <div className="project-info">
                    <img src={ma2} alt="no internet connection"></img>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <a href="https://www.google.com" target="_blank">
                        I patronized
                      </a>
                    </p>
                  </div>
                  <div className="project-info">
                    <img src={man3} alt="no internet connection"></img>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <a href="https://www.google.com" target="_blank">
                        I patronized
                      </a>
                    </p>
                  </div>
                  <div className="project-info">
                    <img src={man4} alt="no internet connection"></img>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
        <div className="footer-image">
          <img src={shape} alt=" shape with white color" />
        </div>
      </section>
    </div>
  );
}
