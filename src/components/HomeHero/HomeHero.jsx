import React from "react";
import "./HomeHero.css";
import frontpic from '../../assets/frontpic.avif'

const HomeHero = () => {
  return (
    <div className="home-hero">
      <img src={frontpic} alt="pic" />
      <h1>THE FUTURE OF MOBILITY IS HERE</h1>
      <p>Discover the safest self-driving experience with Autono.</p>
    </div>
  );
};

export default HomeHero;
