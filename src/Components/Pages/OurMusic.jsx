import React from "react";
import "./OurMusic.css";
import OurMusicImg1 from "../../Assets/OurMusicPageImg1.webp";
import OurMusicImg2 from "../../Assets/OurMusicPageImg2.webp";
import OurMusicImg3 from "../../Assets/OurMusicPageImg3.webp";
import { GiMusicSpell } from "react-icons/gi";
import { FaGooglePlay } from "react-icons/fa";
import BlackIceImg from "../../Assets/BlackIceBgImg.webp";
import VideoBlogImg1 from "../../Assets/VideoBlogImg1.webp";
import VideoBlogImg2 from "../../Assets/VideoBlogImg2.webp";
import VideoBlogImg3 from "../../Assets/VideoBlogImg3.webp";
import VideoBlogImg4 from "../../Assets/VideoBlogImg4.webp";
import MindBlockBanner from "./MindBlockBanner";

const OurMusic = () => {
  return (
    <div>
      <div className="our-music-page">
        <h1>Our Music</h1>
        <hr />
      </div>
      {/*--------------------OurMusic Photos Source Code---------------*/}
      <div className="our-music-images-section">
        <div>
          <img src={OurMusicImg1} alt="" />
          <p>Rock or Bust</p>
        </div>
        <div>
          <img src={OurMusicImg2} alt="" />
          <p>Black Ice</p>
        </div>
        <div>
          <img src={OurMusicImg3} alt="" />
          <p>Dirty Deeds Done Dirt Cheap</p>
        </div>
      </div>
      {/*------------------Our Music Banner Source Code--------------------*/}

      <div className="our-music-banner-section">
        <h1>Listen to Our Songs</h1>
        <hr />
        <div className="banner-btn-responsive">
          <div className="banner-button">
            <GiMusicSpell className="btn-icon" />
            <p>LISTEN ON ITUNES</p>
          </div>
          <div className="banner-button">
            <FaGooglePlay className="btn-icon" />
            <p>LISTEN ON PLAY MUSIC</p>
          </div>
        </div>
      </div>

      {/*-----------------------------Black Ice Official Video-------------*/}
      <div className="black-ice-section">
        <h1>Black Ice Official Video</h1>
        <hr />
        <img src={BlackIceImg} alt="" />
      </div>

      {/*-----------------------------------Video Blog Section-----------------*/}

      <div className="video-blog">
        <h1>Video Blog</h1>
        <hr />
        <div className="video-blog-responsive">
          <div>
            <img src={VideoBlogImg1} alt="/" />
            <p>Black-Light Glow Party</p>
          </div>
          <div>
            <img src={VideoBlogImg2} alt="/" />
            <p>Butterfly Kisses</p>
          </div>
          <div>
            <img src={VideoBlogImg3} alt="/" />
            <p>The Biggest Moment</p>
          </div>
          <div>
            <img src={VideoBlogImg4} alt="/" />
            <p>A magical First Dance</p>
          </div>
        </div>
      </div>
      <MindBlockBanner />
    </div>
  );
};

export default OurMusic;
