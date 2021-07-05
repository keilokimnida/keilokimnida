import React from "react";
import logo from "../assets/images/keilokimnida.png";
import { NavLink } from "react-router-dom";

const Header = ({classTheme}) => {
  return (
    <header className="c-Header">
      <div className="l-Inner">
        {/* Logo section */}
        <div className="c-Header__Logo">
          <NavLink to="/home">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        {/* Links section */}
        <div className="l-Header__Links">
          <div className="c-Header__Links">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink className = "c-Links__Contact" to="/contact">Contact me</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
