import React, { useState } from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import './EmpowerBusiness.css';
import cardHome from './constant'; // Assuming cardHome is an array of objects containing card details

const EmpowerBusiness = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className='container-fluid pt-5 my-5 pb-5' style={{ backgroundColor: "#e8f4ff" }}>
      <div className='text-center'>
        <h4 className='fw-bold'>WHAT WE DO</h4>
        <h1 className='text-primary fs-1 fw-bolder'>Explore Our Offerings and Empower Your Business!</h1>
      </div>
      <div className="container-lg container-fluid ">
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2  g-4">
          {/* Dynamically render cards */}
          {cardHome.map((item, index) => (
            <div
              key={index}
              className={`col ${hoveredIndex === index ? 'expand' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className='card-container'>
                <div className='d-flex justify-content-center img-container' style={{ minHeight: '150px' }}>
                  {item.img ? (
                    <img
                      src={item.img}
                      alt={item.title}
                      className={`img-fluid ${hoveredIndex === index ? 'shrink' : ''}`}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  ) : (
                    <div className="img-placeholder" style={{ width: '100%', height: '150px', backgroundColor: '#f0f0f0' }}></div>
                  )}
                </div>
                <div className={`d-flex justify-content-center gap-3 mt-3 transition-heading ${hoveredIndex === index ? 'up' : ''}`}>
                  <h4 className='fw-bold'>{item.title}</h4>
                  <span>
                    <IoIosArrowDroprightCircle
                      size={30}
                      className={`icon-rotate ${hoveredIndex === index ? 'up' : ''}`}
                    />
                  </span>
                </div>
                <p className={`text-center fw-bold mt-3 transition-paragraph ${hoveredIndex === index ? 'show' : 'hide'}`}>
                  {item.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmpowerBusiness;
