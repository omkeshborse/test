import React from "react";
import  "../style/herosection.css";
import chat from '../assets/chat.png'
const Herosection = () => {
  return (
    <>
      <main className="hero-section">
        <h1>
          Enim in consectetur eiusod, <span>Enim id enim et non</span>{" "}
        </h1>
        <button>Explore</button>
        <img src={chat} alt="chat" className="chat" />
      </main>
    </>
  );
};

export default Herosection;
