import React from "react";
import "./HomeTime.css";
import homepic3 from '../../assets/homepic3.avif'
import homepic4 from '../../assets/homepic4.avif'

const HomeTime = () => {
  return (
    <div className="home-time">
      <div className="home-time-div">
        <div className="image">
          <img src={homepic3} alt="pic3" />
        </div>
        <div className="home-time-heading">
        <h1>REAL-TIME INFORMATION</h1>
        <p>
          I'm a paragraph. Click here to add your own text
          and edit me. It’s easy. Just click “Edit Text” or double click me to
          add your own content and make changes to the font. I’m a great place
          for you to tell a story and let your users know a little more about
          you.
        </p>
        <button>Read More</button>
        </div>
      </div>
      <div className="home-time-div">
        <div className="image">
          <img  src={homepic4} alt="pic4" />
        </div>
        <div className="home-time-heading">
        <h1>PERCEPTION ENABLED</h1>
        <p>
          I'm a paragraph. Click here to add your own text
          and edit me. It’s easy. Just click “Edit Text” or double click me to
          add your own content and make changes to the font. I’m a great place
          for you to tell a story and let your users know a little more about
          you.
        </p>
        <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default HomeTime;
