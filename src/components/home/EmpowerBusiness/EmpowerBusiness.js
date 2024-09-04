import React, { useState } from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import './EmpowerBusiness.css';
import cardHome from './constant';

const EmpowerBusiness = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='container-fluid container-lg pt-5 pb-5' style={{ background: '#ffeaed' }}>
      <div className='text-center'>
        <h4>WHAT WE DO</h4>
        <h1>Explore Our Offerings and Empower Your Business!</h1>
      </div>
      <div className="row">
       
          <div 
          className={`col-12 col-md-6 col-lg-3 border mx-lg-3 card-container ${isHovered ? 'expand' : ''}`} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className='d-flex justify-content-center img-container'>
            <img 
              src="https://api.lucerna-tech.com/storage/service-image/mJKTW8GvgUvxVKuV1xv3ukdmKxhM1IPrZ6Wrry9G.png" 
              alt="Web Development" 
              className={`img-fluid ${isHovered ? 'shrink' : ''}`} 
              style={{ width: '200px' }} 
            />
          </div>
          <div className={`d-flex justify-content-center gap-3 mt-3 transition-heading ${isHovered ? 'up' : ''}`}>
            <h4>Web Development</h4>
            <span> 
              <IoIosArrowDroprightCircle 
                size={30} 
                className={`icon-rotate ${isHovered ? 'up' : ''}`} 
              /> 
            </span>
          </div>
          <p className={`text-center mt-3 transition-paragraph ${isHovered ? 'show' : 'hide'}`}>
            Our skilled web developers build scalable web applications for better outreach.
          </p>
        </div>
      
      </div>

      

    </div>
  );
};

export default EmpowerBusiness;
