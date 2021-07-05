import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <div className="c-Home c-Main">
        {/* Top */}
        <div className ="c-Home__Top">
            <h2>Hello, I am</h2>
            <h1>Kei Lok</h1>
            <p>Information Technology Student,</p>
            <p>specializing in web development & design</p>
        </div>

        {/* Bento box area */}
        <div className="c-Home__Bento-box l-Bento-box">
          {/* Row 1 */}
          <div className="l-Bento-box__Row-1">
            <div className="c-Bento-box c-Bento-box__Skill-set">
              <h1>Skill Sets</h1>
              <NavLink to="/about">View more</NavLink>
            </div>
            <div className="c-Bento-box c-Bento-box__About">
              <h1>About me</h1>
              <NavLink to="/about">View more</NavLink>
            </div>
          </div>
          {/* Row 2 */}
          <div className="l-Bento-box__Row-2">
            <div className="c-Bento-box c-Bento-box__Projects">
              <h1>Work keeps me going</h1>
              <p>Check out my selected past projects. <NavLink to="/projects">View more</NavLink></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
