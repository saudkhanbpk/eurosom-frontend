import React from 'react';
import logo from '../images/eurosomlogo.jpg';
import '../css/styles.css';
import '../index.css';
import { Link } from "react-router-dom";
import logoIcon from "../images/chatImage/download.png";

export default function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container flex ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
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
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
          <ul className="navbar-nav ml-5">
            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><Link className="dropdown-item text-dark fw-bold" to="/cloud-services">Cloud Services</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/services/mobile-app-development">Mobile App Development</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/services/big-data-analytics">Big Data & Analytics</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/services/ai-ml-iot-applications">AI/ML & IoT Applications</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/services/cyber-security">Cyber & Information Security</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/services/enterprise-information-management">Enterprise Information Management</Link></li>
              </ul>
            </li>

            {/* Solutions Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="solutionsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solutions
              </a>
              <ul className="dropdown-menu" aria-labelledby="solutionsDropdown">
                <li><Link className="dropdown-item text-dark fw-bold" to="/cloud-infrastructure">Cloud and Infrastructure</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/digital-workplace">Digital Workplace</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/technology-services">Technology Services</Link></li>
              </ul>
            </li>

            {/* Data Center Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dataCenterDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Data Center
              </a>
              <ul className="dropdown-menu" aria-labelledby="dataCenterDropdown">
                <li><Link className="dropdown-item text-dark fw-bold" to="/cloud-services">Cloud Services</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/co-locations">Co-Locations</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/network-surveillance">Network & Surveillance</Link></li>
              </ul>
            </li>

            {/* Technology Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="technologyDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Technology
              </a>
              <ul className="dropdown-menu" aria-labelledby="technologyDropdown">
                <li><Link className="dropdown-item text-dark fw-bold" to="/big-data-technologies">Big Data Technologies</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/microsoft-powerbi">Microsoft PowerBI</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/eurosom-data-platform">Eurosom Data Platform</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/erp-odoo-saas">ERP Odoo SaaS</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/flutter-programming">Flutter Programming</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/chatgpt-api">ChatGPT API</Link></li>
              </ul>
            </li>

            {/* Hire an Expert Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="hireAnExpertDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               <Link to='/hire-developer'>Hire an Expert</Link> 
              </a>
              <ul className="dropdown-menu" aria-labelledby="hireAnExpertDropdown">
                <li><Link className="dropdown-item  text-dark fw-bold" to="/app-developer">App Developers</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/data-analysts">Data Analysts</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/cloud-engineers">Cloud Engineers</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/erp-odoo-consultants">ERP Odoo Consultants</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/ai-consultants">AI Consultants</Link></li>
              </ul>
            </li>

            {/* Learning Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="learningDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learning
              </a>
              <ul className="dropdown-menu" >
                <li><Link className="dropdown-item text-dark fw-bold" to="/cloud-computing">Cloud Computing</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/data-analytics">Data Analytics</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/artificial-intelligence">Artificial Intelligence</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/app-development">App Development</Link></li>
                <li><Link className="dropdown-item text-dark fw-bold" to="/cyber-security">Cyber Security</Link></li>
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

            <a href='/'><Link className=" text-white border rounded-pill bg-danger px-4" to="/contact-us">Contact Us</Link></a>
          </ul>
        </div>
      </div>
    </nav>
  );
}
