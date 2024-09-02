import React from "react";
import LogoIcon from "../images/chatImage/download.png";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaGooglePlusG,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <img src={LogoIcon} alt="Lucerna Tech Logo" className="mb-2" />
            <p>
              Eurosom Tech designs, builds, operates, and manages custom-made
              information security technology solutions. We have highly
              sought-after Eurosom Tech security-related skills ranging from
              technical certifications.
            </p>
            <div className="d-flex">
              <a href="#" className="me-3 text-primary">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="me-3 text-primary">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="me-3 text-primary">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="text-primary">
                <FaGooglePlusG size={24} />
              </a>
            </div>
          </div>
          <div className="col-md-3 mt-5 col-sm-6 mb-3">
            <h5>Our Services</h5>
            <ul className="list-unstyled">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design & Branding</li>
              <li>DevOps & IT</li>
              <li>Big Data & Analytics</li>
              <li>AI/ML & IoT Apps</li>
              <li>Project Management</li>
              <li>Cyber & Information Security</li>
              <li>Information Management</li>
              <li>Data Center</li>
              <li>Business Continuity</li>
              <li>Network & Surveillance</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6  mt-5  mb-3">
            <h5>Our Solutions</h5>
            <ul className="list-unstyled">
              <li>Rapid 7</li>
              <li>Tenable</li>
              <li>Burp Suite</li>
              <li>Broadcom</li>
              <li>Forcepoint</li>
              <li>Sophos</li>
              <li>NetApp</li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6  mt-5  mb-3">
            <h5>Technology</h5>
            <ul className="list-unstyled">
              <li>.Net</li>
              <li>Flutter</li>
              <li>Laravel</li>
              <li>React JS</li>
              <li>Vue JS</li>
              <li>Node JS</li>
              <li>Python</li>
              <li>PHP</li>
              <li>JavaScript</li>
              <li>FIGMA</li>
              <li>Adobe Design Suite</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <h5>Join Our Newsletter</h5>
          <form className="d-flex flex-md-row">
            <input
              type="email"
              className="form-control mb-2 mb-md-0"
              placeholder="Enter your email"
              style={{
                borderTopRightRadius: 0, 
                borderBottomRightRadius: 0, 
                flex: 1, 
                minWidth: "0", 
              }}
            />
            <span
              className="input-group-text bg-primary"
              style={{
                borderTopLeftRadius: 0, 
                borderBottomLeftRadius: 0, 
              }}
            >
              <FaPaperPlane />
            </span>
          </form>
        </div>
        <div className="row mt-4">
          <div className="col d-flex justify-content-between align-items-center">
            <p className="mb-0">
              Copyright © 2023 Eurosom Tech, All Rights Reserved | Designed &
              Developed by Skynet Solutionz
            </p>
            <div>
              <p className="mb-0">
                <a href="#" className="text-white me-3">
                  Privacy Policy
                </a>
                |
                <a href="#" className="text-white ms-3">
                  Terms & Conditions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
