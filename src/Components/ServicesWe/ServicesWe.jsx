import React from "react";
import "./ServicesWe.css";
import CorporateEventImg from "../../Assets/CorporateEventsImg.webp";
import SpecialEventImg from "../../Assets/SpecialEventsImg.webp";
import CharityEventsImg from "../../Assets/CharityEventsImg.webp";
import CoachingEventsImg from "../../Assets/CoachingImg.webp";
const ServicesWe = () => {
  return (
    <div className="service">
      <h1>
        Services <span>W</span>e Provide
      </h1>
      <ul>
        <li>
          <img src={CorporateEventImg} alt="" />
          <p>Corporate Events</p>
        </li>
        <li>
          <img src={SpecialEventImg} alt="" />
          <p>Special Events</p>
        </li>
        <li>
          <img src={CharityEventsImg} alt="" />
          <p>Charity Events</p>
        </li>
        <li>
          <img src={CoachingEventsImg} alt="" />
          <p>Coaching</p>
        </li>
      </ul>
      <div className="btn-container">
        <button className="view-button">VIEW ALL</button>
        <button className="view-button request-btn">REQUEST A QUOTE</button>
      </div>
    </div>
  );
};

export default ServicesWe;
