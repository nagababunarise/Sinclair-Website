import React from "react";
import "./LatestEvents.css";
import E1 from "../../Assets/EventsImg1.webp";
import E2 from "../../Assets/EventsImg2.webp";
import E3 from "../../Assets/EventsImg3.webp";
import E4 from "../../Assets/EventsImg4.webp";
import E5 from "../../Assets/EventsImg5.webp";
import E6 from "../../Assets/EventsImg6.webp";
import E7 from "../../Assets/EventsImg7.webp";
import E8 from "../../Assets/EventsImg8.webp";
import E9 from "../../Assets/EventsImg9.webp";

const LatestEvents = () => {
  return (
    <div className="latest">
      <div className="latest-content">
        <h1>
          Our Latest <span>Events</span>
        </h1>
        <p>
          Let us take your next special occasion to the next level and create a
          remarkable experience that you and your guests will never forget. We
          are ready to create a bespoke program according to your needs and
          expectations.
        </p>
      </div>
      <hr />
      <div className="images-card">
        <img src={E1} alt="" />
        <img src={E2} alt="" />
        <img src={E3} alt="" />
        <img src={E4} alt="" />
        <img src={E5} alt="" />
        <img src={E6} alt="" />
        <img src={E7} alt="" />
        <img src={E8} alt="" />
        <img src={E9} alt="" />
      </div>
    </div>
  );
};

export default LatestEvents;
