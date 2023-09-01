import React, { useState, useEffect } from "react";
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from "../../../uitilities/commonUties";
import ScrollService from "../../../uitilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // Add this state
  useEffect(() => {
    const handleScroll = () => {
      const homeComponent = document.getElementById("Home");
      if (homeComponent) {
        setScrollPosition(window.scrollY); // Set the scroll position
        if (homeComponent.getBoundingClientRect().top === 0) {
          setSelectedScreen(0); // Set "Home" as selected when scrolled to the top
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
    setSelectedScreen(screenIndex);
  };
  let currentScreenSubscription =
    ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((Screen, i) => (
      <div
        key={Screen.screen_name}
        className={getHeaderOptionsClasses(i)}
        onClick={() => switchScreen(i, Screen)}
      >
        <span>{Screen.screen_name}</span>
      </div>
    ));
  };
  const getHeaderOptionsClasses = (index) => {
    let classes = "header-option ";
    if (index < TOTAL_SCREENS.length - 1) classes += "header-option-separator";
    if (selectedScreen === index) classes += " selected-header-option ";
    return classes;
  };

  const switchScreen = (index, screen) => {
    if (screen.screen_name === "Home") {
      ScrollService.scrollService.scrollToHome(); // Scroll to "Home" using ScrollService
    } else {
      let screenComponent = document.getElementById(screen.screen_name);
      if (!screenComponent) return;
      screenComponent.scrollIntoView({ behavior: "smooth" });
    }
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  return (
    <div
      className="header-container"
      onClick={() => setShowHeaderOptions(!showHeaderOptions)}
    >
      <div className="header-parent">
        <div
          className="header-hamburger"
          onClick={() => setShowHeaderOptions(!showHeaderOptions)}
        >
          <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
        </div>
        <div className="header-logo">
          <span>Mohammad.T</span>
        </div>
        <div
          className={
            showHeaderOptions
              ? "header-options show-hamburger-options"
              : "header-options"
          }
        >
          {getHeaderOptions()}
        </div>
      </div>
    </div>
  );
}
