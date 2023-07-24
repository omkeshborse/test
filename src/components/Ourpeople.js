import React from "react";
import "../style/ourpeople.css";
import people1 from "../assets/Frame36.png";
import people2 from "../assets/Frame39.png";
import people3 from "../assets/Frame40.png";
const Ourpeople = () => {
  return (
    <>
      <section className="ourpeople">
        <div className="left-ourpeople">
          <h1>
            Lorem Ipsum Dolor Emitt <br /> <span>Enim id enim et non</span>{" "}
          </h1>
        </div>
        <div className="right-ourpeople">
          <div>
            <div><img src={people1} alt="" /></div>
            <h3>
              John Doe <br />
              <span>E-REPS</span>
            </h3>
          </div>
          <div>
            <div><img src={people2} alt="" /></div>
            <h3>
              John <br />
              <span>weight management</span>
            </h3>
          </div>
          <div>
            <div><img src={people3} alt="" /></div>
            <h3>
              Michael <br />
              <span>weight management</span>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ourpeople;
