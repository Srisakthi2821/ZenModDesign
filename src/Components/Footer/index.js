import { Link } from "react-router-dom";
import "./index.css";
import logoImage from "../assets/Logos/zen.png"; // Adjust the path as necessary

const companyLinks = [
  { title: "About Us", path: "/contact" }, // Assuming typo; no /about route
  { title: "Our Projects", path: "/project" },
  { title: "Services", path: "/services" },
  { title: "Gallery", path: "/gallery" },
  { title: "Contact Us", path: "/contact" },
  { title: "Register User!", path: "/admin" },
];

const serviceLinks = [
  { title: "Kitchen Designs", path: "/services" },
  { title: "Kitchen Planner", path: "/services" },
  { title: "Remodeling Kitchen", path: "/services" },
  { title: "Kitchen Cabinet", path: "/services" },
  { title: "Kitchen Modelling", path: "/services" },
  { title: "Kitchen Installation", path: "/services" },
  
];

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="logo-section">  
          <h2>
            <img src={logoImage} alt="Modular Kitchen Logo" width="40" /> 
            Zen Mod Design
          </h2>
          <p>We made projects specially for Modular Kitchen & Interior</p>
          <div className="contact">
            <div>
              <p>Call Us</p>
              <a href="tel:+180034567890">+1800(345)-67890</a>
            </div>
            <div>
              <p>Send a message</p>
              <a href="mailto:info@example.com">zenmoddesign@example.com</a>
            </div>
          </div>
        </div>
        <div className="links">
          <div>
            <h3>Company</h3>
            <ul>
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        © Copyright Modular Kitchen 2024. All rights reserved.
      </div>
    </>
  );
}

export default Footer;