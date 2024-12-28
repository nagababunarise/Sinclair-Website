import React from "react";
import AboutImage from "../../Assets/aboutImage.webp";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div>
        <h1>About Us</h1>
        <p>
          Whether you're planning a social, corporate, municipal, or private
          event, our team will help you turn your vision into reality. Here at
          Sinclair, we pride ourselves on our ability to focus on every detail
          of your special event planning. Our commitment to excellence is
          crucial to achieving success. <br />
          We are dedicated to creating sophisticated events through creative
          approach, professionalism, experience, and flexibility. Over the past
          20 years, we have created memorable events that exceeded both clients'
          and guests' expectations. Each of our clients is assigned a
          professional event planner who coordinates all aspects and makes sure
          that the requirements are met at every stage. <br /> Let our team take
          your next social event to new soaring heights and create unique
          special moments.
        </p>
        <button>MORE ABOUT US</button>
      </div>
      <img src={AboutImage} alt="about-image" className="about-image" />
    </div>
  );
};

export default About;
