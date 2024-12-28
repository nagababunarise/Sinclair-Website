import React from "react";
import SoundVision from "../../Assets/SoundImage.webp";
import AolImage from "../../Assets/AolMusic.webp";
import BerkImage from "../../Assets/BerkMusic.webp";
import MusicImage from "../../Assets/MusicImage.webp";
import "./OurAffiliates.css";

const OurAffiliates = () => {
  return (
    <div className="affiliates">
      <h1>Our Affiliates</h1>
      <hr />
      <div className="affiliates-img-card">
        <img src={SoundVision} alt="/" />
        <img src={AolImage} alt="/" />
        <img src={BerkImage} alt="/" />
        <img src={MusicImage} alt="/" />
      </div>
    </div>
  );
};

export default OurAffiliates;
