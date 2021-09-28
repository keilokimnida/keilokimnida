import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import linkedInLogo from "../assets/images/linked-in.png"
import githubLogo from "../assets/images/github.png"

const Home = () => {
  return (
    <>
      <div className="c-Home c-Main">
        {/* Top */}
        <div className="c-Home__Top">
          <h2>Hello, I am</h2>
          <h1>Kei Lok</h1>
          <p>Information Technology Student,</p>
          <p>specializing in web development & design</p>
        </div>
        <div className="c-Home__Socials">
          <h1>Find out more!</h1>
          <div className="c-Home__Socials-links">
            {/* Linkedin */}
            <a
              className="c-Socials-Links__LinkedIn"
              href="https://www.linkedin.com/in/thamkeilok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src = {linkedInLogo} alt="LinkedIn"/>
              LinkedIn
            </a>
            {/* Github */}
            <a
              className="c-Socials-Links__Github"
              href="https://github.com/keilokimnida"
              target="_blank"
              rel="noopener noreferrer"
            >
               <img src = {githubLogo} alt="GitHub"/>
              Projects
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
