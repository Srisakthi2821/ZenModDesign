import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import logoImage from "../assets/Logos/zen.png"; // Logo image

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-light ">
  <Link to="/" className="link_brand_logo">
      <img className="image_brand_logo" src={logoImage} />
      </Link>
      <Link to="/" className="link_brand_logo">
      <h1 className="heading_navbar">Zen MOD Design</h1>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav m-auto">
        <Link className="nav-link" to="/" style={{ fontFamily: "Dosis, sans-serif" }}>
          Home <span className="sr-only">(current)</span>
        </Link>
        <Link className="nav-link" to="/project" style={{ fontFamily: "Dosis, sans-serif" }}>
          Project
        </Link>
        <Link className="nav-link" to="/services" style={{ fontFamily: "Dosis, sans-serif" }}>
          Services
        </Link>
        <Link className="nav-link" to="/gallery" style={{ fontFamily: "Dosis, sans-serif" }}>
          Gallery
        </Link>
        <Link className="nav-link" to="/contact" style={{ fontFamily: "Dosis, sans-serif" }}>
          Contact
        </Link>
        <Link to="/contact" className="buttonLinks nav_button_call">
          {" "}
          <button className="discover_moreButton_home bk_appoint_butn_home bk_appoint_butn_home_nav">
            Book Appointment
            <i className="fas fa-phone-alt"></i>
          </button>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
