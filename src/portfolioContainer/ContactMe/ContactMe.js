import React, { useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/contactMeImages/mailz2.jpg";
import load2 from "../../../src/contactMeImages/load2.gif";
import ScreenHeading from "../../uitilities/ScreenHeading/screenHeading";
import ScrollService from "../../uitilities/ScrollService";
import Animations from "../../uitilities/Animations";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
    } finally {
      setBool(false);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || " "}>
      <ScreenHeading
        subHeading={"I will be glad to hear from you."}
        title={"Contact Me"}
      />
      <div className="central-form">
        <div className="col">
          <h2 className="title">Get In Touch 📧</h2>{" "}
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
        <div className="back-form">
          <div className="img-back">
            <h4>Email me.</h4>
            <img src={imgBack} alt="image not found" />
          </div>

          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />
            <label htmlFor="email">Email Address</label>
            <input type="email" onChange={handleEmail} value={email} />
            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />
            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load2} alt="image of emain network" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
