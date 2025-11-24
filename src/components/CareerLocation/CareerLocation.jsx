import React from "react";
import careerpic1 from "../../assets/careerpic1.avif";

const CareerLocation = () => {
  return (
    <div className="tech-product">
      <div className="tech-car-upper">
        <div className="tech-car-side-div">
          <h3>LOCATION</h3>
          <h3 style={{ marginTop: "20px",  fontSize: "25px"}}>We’re based in San Francisco’s innovation hub</h3>
          <p style={{ fontSize: "25px" }}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <img src={careerpic1} alt="" />
      </div>
    </div>
  );
};

export default CareerLocation;
