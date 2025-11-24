import React from "react";
import "./HomeNumber.css";
import homepic5 from "../../assets/homepic5.avif";

const HomeNumber = () => {
  return (
    <div className="home-number">
      <img src={homepic5} alt="" />
      <div className="home-number-side">
        <h3>Autono In Numbers</h3>
        <div className="list">
          <div className="number-list">
            <h2>200</h2>
            <hr />
            <p>EMPLOYEES</p>
          </div>
          <div className="number-list">
            <h2>5</h2>
            <hr />
            <p>CORE TEAMS</p>
          </div>
          <div className="number-list">
            <h2>200M$</h2>
            <hr />
            <p>CAPITAL</p>
          </div>
          <div className="number-list">
            <h2>326</h2>
            <hr />
            <p>PARTNERS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNumber;
