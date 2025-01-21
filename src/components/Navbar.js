import React, { useState } from 'react';
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder'; 
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" }
  ];

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="Pizza Logo" />
        <div className={openLinks ? "hiddenLinks open" : "hiddenLinks"}>
          {navLinks.map((link, index) => (
            <Link key={index} to={link.to}>{link.label}</Link>
          ))}
        </div>
      </div>
      <div className="rightSide">
        <button className="hamburgerBtn" onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
        <div className="links">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.to}>{link.label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
