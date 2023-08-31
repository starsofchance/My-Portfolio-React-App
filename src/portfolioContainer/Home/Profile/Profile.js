import React from "react";
// import Typical from "react-typical";

import ScrollService from "../../../uitilities/ScrollService";

import "./Profile.css";
export default function Profile() {
  const scrollService = new ScrollService();
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              {" "}
              <a
                href="https://github.com/starsofchance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-taghavi-far/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="https://twitter.com/miim_noon1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/ultimat3.shooter/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}Greetings, Earthling! I'm{" "}
              <span className="highlighted-text">Mohammad.</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>Frontend wizard by day, dreamer by night.</h1>
              {/* {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Brilliant Developer ✅",
                    2000,
                    "Front-End Developer 💻",
                    2000,
                    "React Dev 😎",
                    2000,
                    "JS Dev 💛",
                    2000,
                  ]}
                />
              </h1> */}
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => scrollService.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href="Mohammad-Taghavi-FED.pdf" download="Mohammad Taghavi.pdf">
              <button className="btn highlighted-btn">My Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
