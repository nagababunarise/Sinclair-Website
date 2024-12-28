import React from "react";
import A1 from "../../Assets/Award1.webp";
import A2 from "../../Assets/Award2.webp";
import A3 from "../../Assets/Award3.webp";
import "./Awards.css";

const Awards = () => {
  return (
    <div className="award">
      <div className="award-content">
        <h1>Awards</h1>
        <hr />
        <p>
          We’re proud to be recognized for our dedication and quality of
          services. Here are our most recent awards:
        </p>
      </div>
      <div className="award-images">
        <img src={A1} alt="" />
        <img src={A2} alt="" />
        <img src={A3} alt="" />
      </div>
    </div>
  );
};

export default Awards;
