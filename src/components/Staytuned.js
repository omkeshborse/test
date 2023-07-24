import React from 'react'
import "../style/staytuned.css";
import chat from "../assets/chat-logo.png";
const Staytuned = () => {
  return (
    <>
      <section className="staytuned">
        <div className="container">
          <div>
            <h1>Stay tuned!</h1>
            <p>
              Get the latest articles and business updates <br /> that you need
              to know, you&apos;ll even get <br /> special recommendations
              weekly
            </p>
          </div>
          <div className='input-box'>
            <input type="text"  placeholder="Enter Your Email ID" />
            <button>Sign Up</button>
          </div>
          <div>
            <img src={chat} alt="" srcset="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Staytuned
/*  */