import React, { useState } from "react";
import logo from "../images/eurosomlogo.jpg";
import "../css/styles.css";
import "../index.css";
import { Link } from "react-router-dom";
import logoIcon from "../images/chatImage/download.png";


export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container flex ">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span>
            <i className="bi bi-list"></i>
          </span>
        </button>
        <Link className="navbar-brand" aria-current="page" to="/">
          <img
            src={logoIcon}
            alt="Eurosom logo"
            style={{
              height: "42px",
              width: "80px",
            }}
          />
        </Link>
        <div
           className={`collapse navbar-collapse justify-content-end ${
            isMenuOpen ? "show" : "" // Highlight: Conditionally apply 'show' class
          }`}
          // id="navbarTogglerDemo03"
        >
          <ul className="navbar-nav ">
            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link "
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/cloud-services"
                  >
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/services/mobile-app-development"
                    onClick={closeMenu}
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/services/big-data-analytics"
                    onClick={closeMenu}
                  >
                    Big Data & Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/services/ai-ml-iot-applications"
                    onClick={closeMenu}
                  >
                    AI/ML & IoT Applications
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/services/cyber-security"
                    onClick={closeMenu}
                  >
                    Cyber & Information Security
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/services/enterprise-information-management"
                    onClick={closeMenu}
                  >
                    Enterprise Information Management
                  </Link>
                </li>
              </ul>
            </li>

            {/* Solutions Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="solutionsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solutions
              </a>
              <ul className="dropdown-menu" aria-labelledby="solutionsDropdown">
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/cloud-infrastructure"
                    onClick={closeMenu}
                  >
                    Cloud and Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/digital-workplace"
                    onClick={closeMenu}
                  >
                    Digital Workplace
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/technology-services"
                    onClick={closeMenu}
                  >
                    Technology Services
                  </Link>
                </li>
              </ul>
            </li>

            {/* Data Center Dropdown */}
            <li className="nav-item text-nowrap dropdown">
              <a
              style={{display:"flex",
                alignItems:"center"
              }}
                className="nav-link d-flex  item-center"
                href="#"
                id="dataCenterDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Data Center
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="dataCenterDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/cloud-services"
                    onClick={closeMenu}
                  >
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/co-locations"
                    onClick={closeMenu}
                  >
                    Co-Locations
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/network-surveillance"
                    onClick={closeMenu}
                  >
                    Network & Surveillance
                  </Link>
                </li>
              </ul>
            </li>

            {/* Technology Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link "
                href="#"
                id="technologyDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Technology
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="technologyDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/big-data-technologies"
                    onClick={closeMenu}
                  >
                    Big Data Technologies
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/microsoft-powerbi"
                    onClick={closeMenu}
                  >
                    Microsoft PowerBI
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/eurosom-data-platform"
                    onClick={closeMenu}
                  >
                    Eurosom Data Platform
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/erp-odoo-saas"
                    onClick={closeMenu}
                  >
                    ERP Odoo SaaS
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/flutter-programming"
                    onClick={closeMenu}
                  >
                    Flutter Programming
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/chatgpt-api"
                    onClick={closeMenu}
                  >
                    ChatGPT API
                  </Link>
                </li>
              </ul>
            </li>

            {/* Hire an Expert Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link text-nowrap"
                href="#"
                id="hireAnExpertDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              Hire an Expert
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="hireAnExpertDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item  text-dark fw-bold"
                    to="/app-developer"
                    onClick={closeMenu}
                  >
                    App Developers
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/data-analysts"
                    onClick={closeMenu}
                  >
                    Data Analysts
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/cloud-engineers"
                    onClick={closeMenu}
                  >
                    Cloud Engineers
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/erp-odoo-consultants"
                    onClick={closeMenu}
                  >
                    ERP Odoo Consultants
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/ai-consultants"
                    onClick={closeMenu}
                  >
                    AI Consultants
                  </Link>
                </li>
              </ul>
            </li>

            {/* Learning Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link text-nowrap"
                href="#"
                id="learningDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learning
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/cloud-computing"
                    onClick={closeMenu}
                  >
                    Cloud Computing
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/data-analytics"
                    onClick={closeMenu}
                  >
                    Data Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/artificial-intelligence"
                    onClick={closeMenu}
                  >
                    Artificial Intelligence
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/app-development"
                    onClick={closeMenu}
                  >
                    App Development
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/cyber-security"
                    onClick={closeMenu}
                  >
                    Cyber Security
                  </Link>
                </li>
              </ul>
            </li>

            {/* Direct Links */}
            {/* <li className="nav-item">
              <a className="nav-link" href="https://odoo.eurosom.com">Odoo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://play.google.com/store/apps/details?id=com.eurosom&hl=es_419&gl=US">
                Mobile Apps
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://chatgpt.eurosom.com">ChatGPT</a>
            </li> */}

            <button className="bg-danger rounded-pill px-2">
              <Link
                className="text-white  text-center"
                to="/contact-us"
                onClick={closeMenu}
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </Link>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
