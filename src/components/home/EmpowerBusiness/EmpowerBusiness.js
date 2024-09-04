import React, { useState } from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import './EmpowerBusiness.css';  // Ensure this file is correctly referenced

const EmpowerBusiness = () => {
  // State to manage hover effect
  const [isHovered, setIsHovered] = useState(false);

  // Handlers to toggle hover state
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='container-fluid pt-5 pb-5' style={{ background: '#ffeaed' }}>
      <div className='text-center'>
        <h4>WHAT WE DO</h4>
        <h1>Explore Our Offerings and Empower Your Business!</h1>
      </div>
      <div className="row ">
        {/* Card Section */}
        <div 
          className={`col-12 col-md-6 col-lg-3 border px-lg-5 mx-lg-5 card-container ${isHovered ? 'expand' : ''}`} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className='d-flex justify-content-center'>
            <img 
              src="https://api.lucerna-tech.com/storage/service-image/mJKTW8GvgUvxVKuV1xv3ukdmKxhM1IPrZ6Wrry9G.png" 
              alt="Web Development" 
              className='img-fluid' 
              style={{ width: '200px' }} 
            />
          </div>
          <div className='d-flex justify-content-center gap-3 mt-3'>
            <h4>Web Development</h4>
            <span> 
              <IoIosArrowDroprightCircle size={30} /> 
            </span>
          </div>
          {/* Paragraph content with animation classes */}
          <p className={`text-center mt-3 transition-paragraph ${isHovered ? 'show' : 'hide'}`}>
            Our skilled web developers build scalable web applications for better outreach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmpowerBusiness;
