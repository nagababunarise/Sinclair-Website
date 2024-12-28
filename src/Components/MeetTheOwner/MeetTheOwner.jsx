import React from "react";
import "./MeetTheOwner.css";
import OwnerImage from "../../Assets/OwnerImg.webp";

const MeetTheOwner = () => {
  return (
    <div className="meet-owner">
      <div>
        <h1>Meet the Owner</h1>
        <p>
          Jessica Sinclair is the founder and leader of Sinclair Master of
          Ceremonies – a professional event hosting & MC entertainment company
          headquartered in London, England. <br />
          Sinclair is an accomplished,devoted, and passionate entrepreneur with
          a desire to cater to her clients, create outstanding and unique
          events, and develop a social community. She prides herself on
          providing services with the utmost thoughtful and professional
          approach. <br />
          Utilizing the communication and management skills she has obtained
          from a Master’s degree in Media & Communications, as well as from her
          past work experience in public relations, she is qualified to fulfill
          the visions of her clients precisely.
          <br />
          Sinclair has had the pleasure of hosting corporate and social events
          for a variety of industries, including tech, retail, legal, financial,
          education, athletic, and nonprofit. Her long-term commitment to the
          event management brings an extensive network of caterers,
          entertainers, venue managers, and other event resources to guarantee
          high-quality service at each event.
        </p>
      </div>
      <img src={OwnerImage} alt="" className="meet-image" />
    </div>
  );
};

export default MeetTheOwner;
