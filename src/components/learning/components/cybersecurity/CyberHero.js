import React from 'react';


const CyberHero = () => {
  return (
    <div className="container-fluid mt-5 hero-section d-flex align-items-center">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h2 className="fw-bold text-primary">
            Recruit skilled Flutter developers for exceptional mobile applications
          </h2>
          <p className="text-black fw-bold">
            Flutter - an open-source software development kit that has transformed the landscape of mobile app
            development with its revolutionary capabilities.
            <br />
            With Flutter, you can build native apps for Android, iOS, Linux, Mac, Windows, and Google Fuchsia using a
            single codebase. This versatile platform supports the creation of natively compiled apps for the web and
            desktop, making Flutter the future of software programming. Consequently, it comes as no surprise that
            there is a growing demand for Flutter Developers proficient in the Dart language.
          </p>
          <button className="btn rounded-pill btn-primary">Contact Lucerna Tech</button>
        </div>
        <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
          <img
            src="https://api.lucerna-tech.com/storage/technologies/banner-image/Wznli0HxiZwD4CdzsNWkZ1IqK22LiwYMXfb9V9CN.svg"
            alt="Hero Illustration"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default CyberHero;
