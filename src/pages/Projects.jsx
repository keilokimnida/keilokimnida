import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <Header />
      <div className="c-Projects">
        {/* Breadcrumbs section */}
        <h1>Welcome to projects!</h1>
        <NavLink to="/home">home</NavLink>
        {/* Main section */}
        <div className="c-Projects__Top">
          <h1>Selected Projects</h1>
          <p>Here are some projects I had worked on</p>
        </div>

        {/* Bento box section */}
        <div className="c-Projects__Bento-box">
          <h1>Online ISO experience</h1>
          <h2>eISO</h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
