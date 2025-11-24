import React from "react";
import techpic2 from '../../assets/techpic2.avif'

const TechProduct = () => {
  return (
    <div className="tech-product">
      <div className="tech-car-upper">
        <div className="tech-car-side-div">
          <h3>THE AUTONO DIGITAL PRODUCTS</h3>
          <p>
            We’ve developed an app so that each vehicle can drive autonomously and make decisions based on real-time information and situational awareness.
          </p>
        </div>
        <img src={techpic2} alt="" />
      </div>
      <div className="tech-car-bottom-main">
        <div className="tech-car-bottom">
          <h2>ADVANCED CYBER SECURITY</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div className="tech-car-bottom">
          <h2>​REAL-TIME INFORMATION</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechProduct;
