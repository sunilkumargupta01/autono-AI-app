import React from "react";
import "./HomeVision.css";
import homepic1 from "../../assets/homepic1.avif";
import homepic2 from "../../assets/homepic2.avif";

const HomeVision = () => {
  return (
    <div className="home-vision">
      <div className="home-vision-first">
        <div className="home-vision-heading1">
          <h3>VISION</h3>
          <h2>We are Changing the Way the World Thinks About Cars</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div className="first-image">
          <img src={homepic1} alt="pic1" />
        </div>
      </div>
      <div className="home-vision-first home-vision-second">
        <div className=" home-vision-heading1 home-vision-heading2">
          <div className="home-vision-heading-first">
            <h3>SERVICES</h3>
            <h2>
              We Deliver Exceptional Products and Services Around the World
            </h2>
          </div>
          <div className="home-vision-heading-second2">
            <h1>AUTONOMOUS DRIVING</h1>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <button>Read More </button>
          </div>
        </div>
        <div className=" first-image second-image">
          <img src={homepic2} alt="pic2" />
        </div>
      </div>
    </div>
  );
};

export default HomeVision;
