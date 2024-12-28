import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div>
      <div className="contact-section">
        <h1>Contacts</h1>
        <hr />
      </div>
      {/*-----------------------Contact section Address Card---------------*/}
      <div className="address-card">
        <div className="address-card-content">
          <p>
            If you are planning to hire a PRO DJ for your special event, please
            call ahead for an appointment. We will be happy to help you!
          </p>
          <div>
            <CiFacebook className="contact-icons" />
            <CiTwitter className="contact-icons" />
            <CiInstagram className="contact-icons" />
          </div>
        </div>
        <div className="address-details">
          <h1>Address</h1>
          <p>Head office in London 36 Regent St.</p>
          <h2>Phone</h2>
          <p>+ (124) 567 89 00</p>
          <h3>E-mail</h3>
          <p>sinclair@email.com</p>
        </div>
      </div>
      {/*---------------Contact Form Details Source Code----------------------*/}
      <div className="form-main-bg">
        <form>
          <h1>Want Hire a DJ?</h1>
          <p>
            Complete the form below, and we will contact you as soon as possible
          </p>
          <input type="text" placeholder="Full name*" required />
          <input type="text" placeholder="Phone number*" required />
          <input type="email" placeholder="Email*" required />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
