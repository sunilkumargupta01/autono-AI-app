import React from "react";
import "./HomeCareers.css";

const HomeCareers = () => {
  return (
    <div className="home-careers">
      <div className="home-career-heading">
        <h3>CAREERS</h3>
        <h2>
          We’re looking for innovative talent to join our team. See all
          positions and submit your CV.
        </h2>
        <button className="button">Read More</button>
      </div>
      <div className="home-career-side-heading">
        <h3>ELECTRICAL ENGINEER</h3>
        <h4>San Francisco, CA</h4>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </p>
        <button className="button">Read More</button>
      </div>
    </div>
  );
};

export default HomeCareers;
