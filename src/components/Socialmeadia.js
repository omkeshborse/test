import React from "react";
import "../style/scocialmeadia.css";

import social1 from "../assets/Gmail.png";
import social2 from "../assets/Group.png";
import social3 from "../assets/Vector.png";
import social4 from "../assets/instagram.png";
const Socialmeadia = () => {
  return (
    <>
      <section className="staytuned">
        <div className="container">
          <div>
            <h1>LOGO</h1>
            <p>
              Get the latest articles and business <br /> updates that you need
              to know, you’ll <br /> even get special recommendations <br />{" "}
              weekly.
            </p>
          </div>
          <div className="service">
            <div>
              <ul>
                <li>Website Links</li>
                <li>Home</li>
                <li>About</li>
                <li>Get in touch</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Services1</li>
                <li>Services2</li>
                <li>Services3</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Services1</li>
                <li>Services2</li>
                <li>Services3</li>
              </ul>
            </div>
            <div className="sociallinks">
              <ul>
                <li>
                  <img src={social1} alt="" />
                </li>
                <li>
                  <img src={social2} alt="" />
                </li>
                <li>
                  <img src={social3} alt="" />
                </li>
                <li>
                  <img src={social4} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Socialmeadia;
/*  */
