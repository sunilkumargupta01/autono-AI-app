import React from "react";
import "./AboutMission.css";
import aboutpic1 from '../../assets/aboutpic1.avif'

const AboutMission = () => {
  return (
    <div className="about-mission">
      <div className="about-mision-head">
        <h3>OUR MISSION</h3>
        <h2>Redefining the Way We Move</h2>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </p>
        <p>
          This is a great space to write a long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide.{" "}
        </p>
      </div>
      <img src={aboutpic1} alt="" />
    </div>
  );
};

export default AboutMission;
