import "./App.css";
import React, { useState, useEffect } from "react";
import ScrollService from "../src/uitilities/ScrollService";
import PortfolioContainer from "./portfolioContainer/PortfolioContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from "../src/uitilities/commonUties";
import upArrowImage from "../src/assets/Home/arrow.png";
function App() {
  const scrollService = new ScrollService();
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowButton(true); // Show the button when not at the top
      } else {
        setShowButton(false); // Hide the button when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <ToastContainer />
      <PortfolioContainer />
      <div
        className={`call-to-action-button ${showButton ? "apear" : "hidden"}`}
      >
        <button
          className="btn cta-btn"
          onClick={() => {
            scrollService.scrollToHome();
          }}
        >
          <img src={upArrowImage} alt="Scroll to Top" />
        </button>
      </div>
    </div>
  );
}

export default App;
