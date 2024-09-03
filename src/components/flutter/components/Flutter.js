
import React from 'react';
import { Helmet } from 'react-helmet';
import FlutterHero from './FlutterHero';
import FlutterAbout from './FlutterAbout';
import FlutterDetails from './FlutterDetails';
import FrequentlyQuestions from './FrequentlyQuestions';

const Flutter = () => {
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
          <FlutterHero />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <FlutterAbout />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <FlutterDetails />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <FrequentlyQuestions />
        </div>
      </div>
    </div>
  );
};

export default Flutter;
