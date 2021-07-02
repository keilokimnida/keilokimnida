import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="l-Footer">
      <footer className="c-Footer">
            <div className = "c-Footer__Logo">

            </div>
            <div className = "c-Footer__Socials">
                <h1>Follow me on</h1>
                <NavLink to = "#">LinkedIn</NavLink>
                <NavLink to = "#">Github</NavLink>
                <NavLink to = "#">Instagram</NavLink>
            </div>
      </footer>
    </div>
  );
};

export default Footer;
