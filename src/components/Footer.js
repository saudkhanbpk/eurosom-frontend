import React from "react";
import logo from "../images/eurosomlogo.jpg";
import "../css/styles.css";
import "../index.css";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="footer bg-dark py-5">
      <div className="container grid grid-3">
        <div>
          <h1>Eurosom.com</h1>
          <p>Copyright &copy; 2002</p>
        </div>
        <nav>
          <div className="footer-links">
            <Link to="/services">Services</Link>
            <Link to="/solutions">Solutions</Link>
            <a href="data-analytics" to="/data-analytics">
              Data
            </a>
            <a href="https://odoo.eurosom.com">Odoo</a>
            <a href="https://play.google.com/store/apps/details?id=com.eurosom&hl=es_419&gl=US">
              Mobile Apps
            </a>
            <a href="https://chatgpt.eurosom.com">ChatGPT</a>
          </div>

          {/* Footer Links Section */}
          <div className="footer-links mt-4">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/locations">Locations</Link>
            <ul>
              <li><Link to="/locations/mogadishu">Mogadishu</Link></li>
              <li><Link to="/locations/nairobi">Nairobi</Link></li>
              <li><Link to="/locations/london">London</Link></li>
              <li><Link to="/locations/amsterdam">Amsterdam</Link></li>
              <li><Link to="/locations/dubai">Dubai</Link></li>
            </ul>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </nav>

        {/* Legal Section */}
        <div className="legal mt-4">
          <p>Legal</p>
          <p>Copyright &copy; 2022 Eurosom, All Rights Reserved</p>
        </div>

        {/* Social Media Links */}
        <div className="social">
          <a href="https://www.linkedin.com/company/1011865/admin/">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://twitter.com/Eurosom1">
            <i className="fa-brands fa-twitter fa-2x"></i>
          </a>
          <a href="https://www.facebook.com/Eurosomcloud/">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://www.youtube.com/@eurosomso">
            <i className="fab fa-youtube fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/eurosomdata/">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://www.tiktok.com/@eurosomc">
            <i className="fa-brands fa-tiktok fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
