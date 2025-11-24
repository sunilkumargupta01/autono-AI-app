import React from "react";
import "./TechCar.css";
import techpic1 from "../../assets/techpic1.avif";

const TechCar = () => {
  return (
    <div className="tech-car">
      <div className="tech-car-upper">
        <div className="tech-car-side-div">
          <h3>THE AUTONO CAR</h3>
          <p>
            Using groundbreaking perception-enabled sensor technology, the
            Autono car is a fully driverless vehicle engineered to the highest
            degree of precision and safety. It’s autonomous driving reimagined.
          </p>
        </div>
        <img src={techpic1} alt="" />
      </div>
      <div className="tech-car-bottom-main">
        <div className="tech-car-bottom">
          <h2>HUMAN-CENTERED DESIGN</h2>
          <p>
            I'm a paragraph. Click here to add your own
            text and edit me. It’s easy. Just click “Edit Text” or double click
            me to add your own content and make changes to the font. I’m a great
            place for you to tell a story and let your users know a little more
            about you.
          </p>
        </div>
        <div className="tech-car-bottom">
          <h2>​LOW EMISSIONS & EFFICIENCY</h2>
          <p>
            I'm a paragraph. Click here to add your own
            text and edit me. It’s easy. Just click “Edit Text” or double click
            me to add your own content and make changes to the font. I’m a great
            place for you to tell a story and let your users know a little more
            about you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechCar;
