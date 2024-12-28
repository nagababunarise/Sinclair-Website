import React from "react";
import "./Hero.css";
import About from "../About/About";
import ServicesWe from "../ServicesWe/ServicesWe";
import OurChecklist from "../OurChecklist/OurChecklist";
import MeetTheOwner from "../MeetTheOwner/MeetTheOwner";
import OurAffiliates from "../OurAffiliates/OurAffiliates";
import LetsPlan from "../LetsPlan/LetsPlan";
import LatestEvents from "../LatestEvents/LatestEvents";
import Awards from "../Awards/Awards";
import Testimonials from "../Testimonials/Testimonials";
import OurVideos from "../OurVideos/OurVideos";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <h1>
          Discover <br /> Sinclair
        </h1>
        <p>
          We bring your ideal special event into reality and create memories
          that you will cherish forever.
        </p>
        <button>INVITE MC</button>
      </div>
      <About />
      <ServicesWe />
      <OurChecklist />
      <MeetTheOwner />
      <OurAffiliates />
      <LetsPlan />
      <LatestEvents />
      <Awards />
      <Testimonials />
      <OurVideos />
    </div>
  );
};

export default Hero;
