import React from "react";
import "./HomeIndustry.css";
import homepic6 from '../../assets/homepic6.avif'
import homepic7 from '../../assets/homepic7.avif'
import homepic8 from '../../assets/homepic8.avif'
import homepic9 from '../../assets/homepic9.avif'

const HomeIndustry = () => {
  return (
    <div className="home-industry">
      <div className="home-industry-heaing">
        <h3>INDUSTRY</h3>
        <h2>Our Partners</h2>
        <p>
          Click here to add your own content and customize the text. This is a
          great place to tell a story about your company and let your users know
          a little more about the company's history, the team's background, or
          any other information you'd like to share. Just click "Edit Text" to
          get started.
        </p>
      </div>
      <div className="industry-image">
        <div className="industry-image-list">
          <img src={homepic6} alt="" />
          <p>GENERAL TRANSPORT</p>
        </div>
        <div className="industry-image-list special-image">
          <img src={homepic7} alt="" />
          <p>IDI SOFTWARE</p>
        </div>
        <div className="industry-image-list">
          <img src={homepic8} alt="" />
          <p>IMOGEN CARS</p>
        </div>
        <div className="industry-image-list">
          <img src={homepic9} alt="" />
          <p>TRI-NEX</p>
        </div>
      </div>
    </div>
  );
};

export default HomeIndustry;
