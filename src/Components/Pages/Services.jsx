import React from "react";
import "./Services.css";
import ServiceImg1 from "../../Assets/ServiceImg1.webp";
import ServiceImg2 from "../../Assets/ServiceImg2.webp";
import ServiceImg3 from "../../Assets/ServiceImg3.webp";
import MindBlockBanner from "./MindBlockBanner";

const Services = () => {
  return (
    <div>
      <div className="services-bg">
        <h1>Services</h1>
        <hr />
      </div>
      <div className="service-card-responsive">
        <div className="service-card">
          <img src={ServiceImg1} alt="/" />
          <div className="service-content">
            <h1>School Dances & Proms</h1>
            <p>
              Sinclair hosts school dances and proms like no other! Our
              professional DJs stay up-to-date with the latest songs and trends
              so that there’s no way your party will be boring. Our extensive
              library includes more than 40 top hottest songs. The special
              effects lighting will add the atmosphere to your party!
            </p>
            <button>READ MORE</button>
          </div>
        </div>
        <div className="service-card">
          <div className="service-content">
            <h1>Corporate Events</h1>
            <p>
              We host a lot of corporate events including product launches,
              trade shows, holiday celebrations, team-building events, award
              banquets, employee accomplishments, and many others. Our expert
              DJs can promise that they will bring together your whole company
              on the dance floor! We work hard to make your event fun, upbeat,
              and memorable.
            </p>
            <button>READ MORE</button>
          </div>
          <img src={ServiceImg2} alt="/" />
        </div>
        <div className="service-card">
          <img src={ServiceImg3} alt="/" />
          <div className="service-content">
            <h1>Private Parties</h1>
            <p>
              Sinclair is your perfect choice for any private party celebration,
              whether it is a birthday party, anniversary, newborn shower,
              reunion, or any other. We are proud to provide the best quality
              music and create an extraordinary atmosphere for any occasion.
            </p>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
      {/*--------------------------Wedding Banner Source Code-----------------*/}
      <div className="wedding-banner-card">
        <h1>Weddings</h1>
        <hr />
        <p>
          Sinclair congratulates you with your engagement and thanks you for
          choosing us to help you celebrate your long-expected big day! We
          understand that your wedding is the most significant one-in-a-lifetime
          event in your life, so we will take into account every detail. We will
          provide advanced special effect lighting, consider your tastes,
          wedding theme, style, venue decor, and so on. Our DJs will work
          closely with you from the ceremony through to the celebration to
          create the wedding of your dreams!
        </p>
      </div>
      <MindBlockBanner />
    </div>
  );
};

export default Services;
