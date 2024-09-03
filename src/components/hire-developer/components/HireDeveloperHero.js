import React from "react";
import "./HireDeveloperHero.css";

const HireDeveloperHero = () => {
  return (
    <div className="container-fluid position-relative mt-5 hero-section d-flex align-items-center" style={{zIndex:2}}>
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h2 className="fw-bold text-primary">
            Looking for an alternative to traditional recruiting methods for
            hiring software developers?
          </h2>
          <p className="text-black fw-bold">
            Discover highly skilled senior remote developers, thoroughly vetted
            and possessing exceptional technical and communication abilities,
            all at unbeatable rates. They are readily available to work in your
            preferred time zone.
          </p>
          <button className="btn rounded-pill btn-primary" style={{cursor:"pointer"}}>
            Hire Developer
          </button>
        </div>
        <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
          <img
            src="https://api.lucerna-tech.com/storage/banner-images/Hire%20a%20Developer.svg"
            alt="Hero Illustration"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default HireDeveloperHero;
