import React from "react";
import "./ContactHero.css";

const ContactHero = () => {
  return (
    <div className="container mt-5 hero-section d-flex align-items-center position-relative"style={{zIndex:2}}>
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h2 className="fw-bold text-primary">Global Reach, Local Support</h2>
          <p className="text-black fw-bold">
            At Lucerna Tech, we pride ourselves on our global presence, with
            offices in Pakistan and across the world. We are dedicated to
            providing local support and exceptional service to our clients
            wherever they may be. Whether you have inquiries, feedback, or
            collaboration opportunities, we are here to assist you. Feel free to
            contact us.
          </p>
          <button className="btn rounded-pill btn-primary"style={{cursor:'pointer'}}>
            Contact Eurosom Tech
          </button>
        </div>
        <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
          <img
            src="https://api.lucerna-tech.com/storage/banner-images/Contact%20us.svg"
            alt="Hero Illustration"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
