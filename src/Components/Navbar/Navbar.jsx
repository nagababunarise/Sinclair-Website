import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`nav-bar ${sticky ? "dark-nav" : " "}`}>
      <h1>
        <Link to="/" className="nav-logo">
          Sinclair
        </Link>
      </h1>
      <GiHamburgerMenu onClick={toggleMenu} className="menu-icon" />
      <ul className={`nav-links ${isOpen ? "show-menu" : ""}`}>
        <li>
          <Link to="/about" className="nav-bar-links">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/ourMusic" className="nav-bar-links">
            Our Music
          </Link>
        </li>
        <li>
          <Link to="/services" className="nav-bar-links">
            Services
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="nav-bar-links">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="nav-bar-links">
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
