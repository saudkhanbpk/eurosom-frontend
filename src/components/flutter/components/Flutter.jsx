import React from 'react';
import FlutterHero from './FlutterHero';
import FlutterAbout from './FlutterAbout';
import FlutterDetails from './FlutterDetails';
import FrequentlyQuestions from './FrequentlyQuestions';

const Flutter = () => {
  return (
    <div className="container mt-5">
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
          <FrequentlyQuestions/>
        </div>
      </div>
    </div>
  );
};

export default Flutter;
