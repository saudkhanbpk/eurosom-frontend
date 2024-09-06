import React, { useState } from "react";
import logo from "../images/eurosomlogo.jpg";
import "../css/styles.css";
import "../index.css";
import { Link } from "react-router-dom";
import logoIcon from "../images/chatImage/download.png";
import {
  AiOutlineCloud,
  AiOutlineMobile,
  AiOutlineBarChart,
  AiOutlineRobot,
  AiOutlineSafety,
  AiOutlineDatabase,
} from "react-icons/ai";
import { FiCloud, FiMonitor, FiTool } from "react-icons/fi";
import {
  BsBarChartFill,
  BsCameraVideo,
  BsCloud,
  BsCodeSlash,
  BsCpu,
  BsFillChatLeftTextFill,
  BsFillGridFill,
  BsFillHouseDoorFill,
  BsGraphUp,
  BsMicrosoft,
  BsPhone,
  BsRobot,
  BsShieldLock,
  BsTools,
} from "react-icons/bs";

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
                    <AiOutlineCloud className="me-2 text-primary" />
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/services/mobile-app-development"
                    onClick={closeMenu}
                  >
                    <AiOutlineMobile className="me-2 text-primary" />
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/services/big-data-analytics"
                    onClick={closeMenu}
                  >
                    <AiOutlineBarChart className="me-2 text-primary" />
                    Big Data & Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/services/ai-ml-iot-applications"
                    onClick={closeMenu}
                  >
                    <AiOutlineRobot className="me-2 text-primary" />
                    AI/ML & IoT Applications
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/services/cyber-security"
                    onClick={closeMenu}
                  >
                    <AiOutlineSafety className="me-2 text-primary" />
                    Cyber & Information Security
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/services/enterprise-information-management"
                    onClick={closeMenu}
                  >
                    <AiOutlineDatabase className="me-2 text-primary" />
                    Enterprise Information Management
                  </Link>
                </li>
              </ul>
            </li>

            {/* Solutions Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="/"
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
                    <FiCloud className="me-2 text-primary" />
                    Cloud and Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/digital-workplace"
                    onClick={closeMenu}
                  >
                    <FiMonitor className="me-2 text-primary" />
                    Digital Workplace
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/technology-services"
                    onClick={closeMenu}
                  >
                    <FiTool className="me-2 text-primary" />
                    Technology Services
                  </Link>
                </li>
              </ul>
            </li>

            {/* Data Center Dropdown */}
            <li className="nav-item text-nowrap dropdown">
              <a
                style={{ display: "flex", alignItems: "center" }}
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
                    <BsCloud className="text-primary me-2" />
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/co-locations"
                    onClick={closeMenu}
                  >
                    <BsFillHouseDoorFill className="text-primary me-2" />
                    Co-Locations
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/network-surveillance"
                    onClick={closeMenu}
                  >
                    <BsCameraVideo className="text-primary me-2" />
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
                    <BsBarChartFill className="text-primary me-2" /> Big Data
                    Technologies
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/microsoft-powerbi"
                    onClick={closeMenu}
                  >
                    <BsMicrosoft className="text-primary me-2" /> Microsoft
                    PowerBI
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/eurosom-data-platform"
                    onClick={closeMenu}
                  >
                    <BsFillGridFill className="text-primary me-2" /> Eurosom
                    Data Platform
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/erp-odoo-saas"
                    onClick={closeMenu}
                  >
                    <BsTools className="text-primary me-2" /> ERP Odoo SaaS
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/flutter-programming"
                    onClick={closeMenu}
                  >
                    <BsCodeSlash className="text-primary mr-2" /> Flutter
                    Programming
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/chatgpt-api"
                    onClick={closeMenu}
                  >
                    <BsFillChatLeftTextFill className="text-primary me-2" />{" "}
                    ChatGPT API
                  </Link>
                </li>
              </ul>
            </li>

            {/* Hire an Expert Dropdown */}
            <li className=" mt-2">
              <Link to="/app-developer">Hire an Expert</Link>
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
                    to="learning/cloud-computing"
                    onClick={closeMenu}
                  >
                    <BsCloud className="text-primary me-2" /> Cloud Computing
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/learning/data-analytics"
                    onClick={closeMenu}
                  >
                    <BsGraphUp className="text-primary me-2" /> Data Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/learning/artificial-intiligence"
                    onClick={closeMenu}
                  >
                    <BsCpu className="text-primary me-2" /> Artificial
                    Intelligence
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="/learning/app-development"
                    onClick={closeMenu}
                  >
                    <BsPhone className="text-primary me-2" /> App Development
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark fw-bold"
                    to="learning/cyberr-security"
                    onClick={closeMenu}
                  >
                    <BsShieldLock className="text-primary me-2" /> Cyber
                    Security
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

            <button className="bg-danger col-5 col-md-2 text-nowrap rounded-pill px-2">
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
