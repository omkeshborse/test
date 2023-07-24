import React from "react";
import logo from "../assets/LOGO.png";
import "../style/navbar.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="nav">
          <li>
            <img src={logo} alt="" />
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#showcase-section">Program</a>
          </li>
          <li>pricing</li>
          <li>
            <a href="#Blog">Blog</a>
          </li>
          <li>
            <button>Login/signup</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
