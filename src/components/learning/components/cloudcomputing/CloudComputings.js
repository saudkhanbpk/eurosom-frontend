
import React from 'react';
import { Helmet } from 'react-helmet';
import CloudAbout from './CloudAbout';
import CloudHero from './CloudHero';
import CloudDtails from './CloudDetails';
import CloudQuestions from './CloudQuestions';



const CloudComputings = () => {
  return (
    <div className="container mt-5">
      {/* SEO Configuration */}
      <Helmet>
        {/* <title>Flutter Development Services - Hire Expert Flutter Developers</title> */}
        <meta
          name="description"
          content="Hire experienced Flutter developers for mobile app development. Our expert team builds high-performance, cross-platform apps using Flutter."
        />
        <meta
          name="keywords"
          content="Flutter development, hire Flutter developers, mobile app development, cross-platform apps, Flutter services"
        />
        <link rel="canonical" href="https://Eurosom.com/flutter-development" />
      </Helmet>

      
      <div className="row">
        <div className="col-md-12">
          <CloudHero />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <CloudAbout />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-12">
          <CloudDtails />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <CloudQuestions />
        </div>
      </div>
    </div>
  );
};

export default CloudComputings;
