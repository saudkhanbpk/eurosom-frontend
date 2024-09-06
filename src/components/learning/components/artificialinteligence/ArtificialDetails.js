
import React from "react";
import FlutterLogo from '../../../../images/logos/flutter.svg';


const ArtificialDetails = () => {
  return (
    <div className="container-fluid mt-5 hero-section border rounded p-lg-5 d-flex align-items-center">
      <div className="row">
        {/* Column for the Logo and Quote Button */}
        <div className="col-12 col-md-4 text-center mb-4 mb-md-0 d-flex mt-custom  flex-column align-items-center">
          <img className="mb-4" src={FlutterLogo} alt="Flutter Logo" />
          <button className="btn rounded-pill btn-primary mt-btn">
            Get a Quote
          </button>
        </div>
        {/* Column for the Text and Content */}
        <div className="col-12 col-md-8 content">
          <div className="text-container">
            <p className="text-primary fw-bold mb-0">Flutter</p>
            <p>
              Flutter is an open-source UI software development kit (SDK) created by Google. 
              It was first released in May 2017. Flutter allows developers to build natively 
              compiled applications for mobile, web, and desktop from a single codebase. 
              With its Dart programming language and extensive widget library, Flutter enables 
              rapid development, hot reload for real-time updates, and seamless integration with 
              native device features.
            </p>
            <p className="text-primary fw-bold mb-0">Expertise</p>
            <p>
              Our team of skilled developers possesses a profound understanding of various 
              Flutter tools and solutions, including but not limited to:
            </p>
            <ul>
              <li>Flutter, Dart, Responsive UI, Integration, Hot Reload, Cross-platform Development.</li>
              <li>Flutter, Dart, Responsive UI, Integration, Hot Reload, Cross-platform Development.</li>
              <li>Flutter, Dart, Responsive UI, Integration, Hot Reload, Cross-platform Development.</li>
              <li>Flutter, Dart, Responsive UI, Integration, Hot Reload, Cross-platform Development.</li>
              <li>Flutter, Dart, Responsive UI, Integration, Hot Reload, Cross-platform Development.</li>
            </ul>
            <p>
              With our partnership and proficiency in Flutter's ecosystem, we bring to life 
              dynamic and user-centric applications that cater to your unique business 
              requirements. Trust our Flutter consultants to guide you through the development 
              process and create delightful experiences for your users.
            </p>
            <div className="d-flex flex-column flex-md-row">
              <p className="text-primary fw-bold mb-0">Tags:</p>
              <p className="ms-2">
                Flutter, Cross-Platform Development, Mobile Apps, App Development, UI Software 
                Development Kit, Dart Language, Hot Reload, Firebase Integration, Native App 
                Experience, Mobile Development, App Design, Mobile UI, App Performance, 
                Flutter Experts, IT Solutions Provider, IT Consultancy, IT Services, Technical 
                Expertise, Cross-Platform Apps, Mobile Application Development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtificialDetails;
