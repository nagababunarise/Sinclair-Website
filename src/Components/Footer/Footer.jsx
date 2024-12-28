import React from "react";
import "./Footer.css";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-1">
          <h1>Sinclair</h1>
          <p>
            Whether you're planning a social, corporate, municipal, or private
            event, our team will help you turn your vision into reality.
          </p>
        </div>
        <ul className="col-2">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Our Music</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
        <ul className="col-3">
          <li>
            <a href="/">Portfolio</a>
          </li>
          <li>
            <a href="/">News</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
        </ul>
        <div className="col-4">
          <h1>Follows us :</h1>
          <CiFacebook className="media-links" />
          <CiTwitter className="media-links" />
          <CiInstagram className="media-links" />
        </div>
      </div>
      <hr className="footer-hr" />
      <div className="copy-right-card">
        <i class="fa fa-copyright" aria-hidden="true">
          @Created by 2024
        </i>
        <p>All rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
