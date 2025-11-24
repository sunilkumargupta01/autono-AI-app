import React from "react";
import "./AboutJourney.css";

const AboutJourney = () => {
  return (
    <div className="about-journey">
      <h2>Our Journey So Far</h2>
      <div className="about-journey-main">
        <div className="about-journey-main-list">
          <h1>2013</h1>
          <hr />
          <p>AUTONO IS FOUNDED</p>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.{" "}
          </p>
        </div>
        <div className="about-journey-main-list journey-second">
          <h1>2015</h1>
          <hr />
          <p>GROUNDBREAKING SENSOR TECHNOLOGY LAUNCHED</p>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutJourney;
