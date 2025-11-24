import React from "react";
import "./TechnologyHero.css";
import techHeroPic from "../../assets/technologypic.avif";

const TechnologyHero = () => {
  return (
    <div className="technology-hero">
      <h1>PERCEPTION ENABLED <span>TECHNOLOGY</span></h1>
      <img src={techHeroPic} alt="load" />
      <p>
        Click here to edit this paragraph and add your own content. This is a
        great place to expand on the title and any relevant details or
        information.
      </p>
    </div>
  );
};

export default TechnologyHero;
