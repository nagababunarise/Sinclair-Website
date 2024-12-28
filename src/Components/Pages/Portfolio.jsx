import React from "react";
import PortfolioImg1 from "../../Assets/PortfolioImg1.webp";
import PortfolioImg2 from "../../Assets/PortfolioImg2.webp";
import PortfolioImg3 from "../../Assets/PortfolioImg3.webp";
import PortfolioImg4 from "../../Assets/PortfolioImg4.webp";
import PortfolioImg5 from "../../Assets/PortfolioImg5.webp";
import PortfolioImg6 from "../../Assets/PortfolioImg6.webp";
import MindBlockBanner from "./MindBlockBanner";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <div>
      <div className="portfolio-section">
        <h1>Portfolio</h1>
        <hr />
      </div>
      <div className="portfolio-card">
        <p>
          Let us take your next special occasion to the next level and create a
          remarkable experience that you and your guests will never forget. We
          are ready to create a bespoke program according to your needs and
          expectations.
        </p>
        <div className="portfolio-card-responsive">
          <img src={PortfolioImg1} alt="" />
          <img src={PortfolioImg2} alt="" />
          <img src={PortfolioImg3} alt="" />
          <img src={PortfolioImg4} alt="" />
          <img src={PortfolioImg5} alt="" />
          <img src={PortfolioImg6} alt="" />
        </div>
      </div>
      <MindBlockBanner />
    </div>
  );
};

export default Portfolio;
