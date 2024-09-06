
import React from 'react';
import { Helmet } from 'react-helmet';
import AnalyticHero from './AnalyticHero';
import AnalyticAbout from './AnalyticAbout';
import AnalyticsDetails from './AnalyticDetails';
import AnalyticQuestions from './AnalyticQuestions';


const DataAnalytic = () => {
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
          <AnalyticHero />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <AnalyticAbout />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-12">
          <AnalyticsDetails />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <AnalyticQuestions />
        </div>
      </div>
    </div>
  );
};

export default DataAnalytic;
