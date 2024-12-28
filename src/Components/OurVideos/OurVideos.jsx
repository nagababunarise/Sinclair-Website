import React from "react";
import "./OurVideos.css";

import video1 from "../../Assets/VideoImg1.webp";
import video2 from "../../Assets/VideoImg2.webp";
import video3 from "../../Assets/VideoImg3.webp";
import video4 from "../../Assets/VideoImg4.webp";
import video5 from "../../Assets/VideoImg5.webp";
import video6 from "../../Assets/VideoImg6.webp";

function OurVideos() {
  return (
    <div className="ourVideos">
      <h1>Videos</h1>
      <hr />
      <div className="ourVideos-images">
        <img src={video1} alt="" />
        <img src={video2} alt="" />
        <img src={video3} alt="" />
        <img src={video4} alt="" />
        <img src={video5} alt="" />
        <img src={video6} alt="" />
      </div>
    </div>
  );
}

export default OurVideos;
