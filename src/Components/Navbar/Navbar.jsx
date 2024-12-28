import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={classNames("nav-bar", { "dark-nav": sticky })}>
      <h1>
        <Link to="/" className="nav-logo">
          Sinclair
        </Link>
      </h1>
      <GiHamburgerMenu
        onClick={toggleMenu}
        className="menu-icon"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      />
      <ul className={classNames("nav-links", { "show-menu": isOpen })}>
        {["About Us", "Our Music", "Services", "Portfolio", "Contacts"].map(
          (label, idx) => (
            <li key={idx}>
              <Link
                to={`/${label.replace(/\s+/g, "").toLowerCase()}`}
                className="nav-bar-links"
                onClick={handleLinkClick}
              >
                {label}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
