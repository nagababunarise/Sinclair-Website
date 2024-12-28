import React from "react";
import "./Contact.css";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <hr />
      <div className="responsive-contact">
        <div>
          <iframe
            className="map"
            title="Google Maps showing INDIA NewDelhi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5620644657015!2d77.22692941130666!3d28.612911975574043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1734508854171!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="address-content">
          <h1>Sinclair</h1>
          <h2>Address</h2>
          <p>Head Office in India</p>
          <h3>Phone</h3>
          <p>+91 9222 899 900 </p>
          <h4>E-mail</h4>
          <p>sinclair@email.com</p>
          <div>
            <CiFacebook className="font-icon" />
            <CiTwitter className="font-icon" />
            <CiInstagram className="font-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
