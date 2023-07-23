import React from "react";
import logo from '../assets/LOGO.png'
import "../style/navbar.css";

const NavBar = () => {
  
  return (
    <>
    <nav >
        <ul className="nav">
            <li><img src={logo} alt="" /></li>
            <li>Home</li>
            <li>Program</li>
            <li>pricing</li>
            <li>Blog</li>
            <li><button>Login/signup</button></li>
        </ul>
    </nav>
    </>
  );
};

export default NavBar;
