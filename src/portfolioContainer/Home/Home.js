import React from "react";
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from "../../uitilities/commonUties";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import "./Home.css";
export default function Home() {
  return (
    <div className="home-container" id="Home">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
