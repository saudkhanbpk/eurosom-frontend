import React from "react";
import ContactHero from "./ContactHero";
import "./ContactUs.css";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <ContactHero />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
