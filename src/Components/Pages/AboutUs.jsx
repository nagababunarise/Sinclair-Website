import React from "react";
import "./AboutUs.css";
import AboutImg1 from "../../Assets/aboutUsImg1.webp";
import AboutImg2 from "../../Assets/aboutUsImg2.webp";
import Team_img1 from "../../Assets/JessicaImg1.webp";
import Team_img2 from "../../Assets/BrainMayImg.webp";
import Team_img3 from "../../Assets/RogerImg.webp";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

import GalleryImg1 from "../../Assets/GalleryImg1.webp";
import GalleryImg2 from "../../Assets/GalleryImg2.webp";
import GalleryImg3 from "../../Assets/GalleryImg3.webp";

const OurTeam = [
  {
    Team_img: Team_img1,
    name: "Jessica Sinclair",
    role: "CEO and Founder",
    facebook_icon: CiFacebook,
    twitter_icon: CiTwitter,
    instagram_icon: CiInstagram,
    linkedin_icon: CiLinkedin,
  },
  {
    Team_img: Team_img2,
    name: "Brian May",
    role: "DJ",
    facebook_icon: CiFacebook,
    twitter_icon: CiTwitter,
    instagram_icon: CiInstagram,
    linkedin_icon: CiLinkedin,
  },
  {
    Team_img: Team_img3,
    name: "Roger Taylor",
    role: "DJ",
    facebook_icon: CiFacebook,
    twitter_icon: CiTwitter,
    instagram_icon: CiInstagram,
    linkedin_icon: CiLinkedin,
  },
];

const AboutUs = () => {
  return (
    <div className="about-us-main-container">
      <div className="about-us-bg">
        <h1>About Us</h1>
        <hr />
      </div>
      <div className="about-row">
        <div className="about-col1">
          <img src={AboutImg1} alt="/" />
          <div className="about-col2">
            <h2>Shortly About Us</h2>
            <p>
              Sinclair is a family run, vibrant business established in 1998 in
              London, UK, and driven by a passion for music. Our DJ collective
              is highly experienced, organized, and trustworthy. We have a
              common purpose to push the boundaries and break the entertainment
              stereotypes. We develop our talents and strive to provide
              exceptional music and customer service.
            </p>
          </div>
        </div>
        <div className="about-col3">
          <p>
            With more than 20 years of experience in music production, special
            event entertainment, and wedding organization, we are committed to
            providing superior DJ, MC, and music coordination services.
            Additionally, we have high-end professional equipment to ensure
            special effects lighting services for any special occasion. So,
            whether you're planning a social, corporate, municipal, or private
            event, our team will help you turn your vision into reality. Here at
            Sinclair, we pride ourselves on our ability to focus on every detail
            of your special event planning. Our commitment to excellence is
            crucial to achieving success.
          </p>
          <img src={AboutImg2} alt="/" />
        </div>
      </div>
      {/* about quote section code */}

      <div className="about-quote-section">
        <p>
          We have helped thousands of clients to turn their events into the most
          extraordinary and memorable experiences.
        </p>
        <h1>Jessica Sinclair</h1>
      </div>

      {/*---------------Our Team section code-----------*/}

      <div className="our-video-bg">
        <h2>Our Team</h2>
        <hr />
        <ul className="responsive-cards">
          {OurTeam.map((each, index) => (
            <li key={index} className="team-card">
              {" "}
              <img src={each.Team_img} alt={each.name} />
              <h1>{each.name}</h1>
              <p>{each.role}</p>
              <div>
                {<each.facebook_icon className="link-font" />}
                {<each.twitter_icon className="link-font" />}
                {<each.instagram_icon className="link-font" />}
                {<each.linkedin_icon className="link-font" />}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/*------------Gallery Section Code -------------*/}

      <div className="gallery-section">
        <h1>Gallery</h1>
        <hr />
        <div className="gallery-responsive">
          <img src={GalleryImg1} alt="DJ" />
          <img src={GalleryImg2} alt="/" />
          <img src={GalleryImg3} alt="/" />
        </div>
      </div>

      {/*----------------Hire Banner to Us Code--------------*/}

      <div className="hire-section">
        <h1>Want to Hire Us?</h1>
        <hr className="hr3" />
        <p>
          If you are ready to get started on your special event, We are happy to
          provided professional DJ services to make your memories last for a
          lifetime.
        </p>
        <button>CONTACT US</button>
      </div>
    </div>
  );
};

export default AboutUs;
