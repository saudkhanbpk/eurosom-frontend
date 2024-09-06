
import React from 'react';
import { Helmet } from 'react-helmet';
import AppDevelopmentHero from './AppDevelopmentHero';
import AppDevelopmentAbout from './AppDevelopmentAbout';
import AppFreqAskQues from './AppFreqAskQues';
import AppDevelopmentDetails from './AppDevelopmentDeatails';

const AppDevelopment = () => {
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
          <AppDevelopmentHero />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <AppDevelopmentAbout />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-12">
          <AppDevelopmentDetails />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <AppFreqAskQues />
        </div>
      </div>
    </div>
  );
};

export default AppDevelopment;
