import React from "react";
import "./Testimonials.css";

const TestList = [
  {
    paragraph:
      "\"The wedding agency I hired first didn't live up to my standard. My future mother-in-law suggested me to opt for your services instead.     I was skeptical at first, since planning the biggest day of my life on such short notice seemed to be a mission impossible. However, you've nailed it. Thank you so much for making our wedding perfect!\"",
    date: "October 28, 2024",
    name: "Austin Peterson",
    designation: "Marketing Director at Junk Food Co.",
  },
  {
    paragraph:
      '"The whole event moves to the next level when you hire a professional to entertain your guests. Your energy and enthusiasm helped make our anniversary party a day to remember. Thank you for your attention to detail, and for being there at every step of the process. I would definitely hire Sinclair again and recommend them to others."',
    date: "October 27, 2024",
    name: "Alexander Hamilton",
    designation: "CEO at Clear Thinking",
  },
  {
    paragraph:
      '"You really did a superb job and our guests could not stop raving about my bachelor party. The location, the food, the entertainment – everything was flawless. The party went down a storm, everyone had fun and I am so impressed with the work and care you put into planning this. Thank you, Sinclair, for the perfect and unforgettable party!"',
    date: "October 26, 2024",
    name: "Julia Waterford",
    designation: "Director of Media at Universe Communications",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      <hr />
      <ul className="testimonials-content-section">
        {TestList.map((each) => (
          <li>
            <p className="para">{each.paragraph}</p>
            <p className="date-text">{each.date}</p>
            <h2>{each.name}</h2>
            <p className="designation-text">{each.designation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testimonials;
