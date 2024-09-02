import React, { useState, useRef, useEffect } from 'react';
import './MobileApp.css';
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import cardData from './cardData';

const MobileAppDevelopement = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  // Create a ref for each detailed card
  const cardRefs = useRef([]);

  const handleCardClick = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  // Function to handle scroll to the detailed card
  const scrollToCard = (id) => {
    const cardElement = cardRefs.current[id];
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add("card-visible");
          card.classList.remove("card-hidden");
        } else {
          card.classList.add("card-hidden");
          card.classList.remove("card-visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on component mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="container-fluid pt-5 mt-5 my-5 p-lg-5">
        <div className="">
          <div className="row d-flex justify-content-around align-items-center">
            <div className="col-md-6 col-12">
              <h1 className="text-primary fs-1 fw-bolder">
                Bringing your Ideas to Life with Comprehensive Mobile App Development Services
              </h1>
              <p className="fs-4 fw-semibold text-dark-emphasis">
                Grab immediate attention and establish a strong connection with your users by offering a captivating mobile app experience. Get mobile app development services at a highly competitive price that will help you to propel your business forward.
              </p>
              <button className="btn btn-primary rounded-pill mt-3">Contact Eurosom</button>
            </div>
            <div className="col-md-4 col-12">
              <img
                src="https://api.lucerna-tech.com/storage/Banner-image/sFmzPiprtr2YAIj9s2Xfd1mhM4dUGsAstExMCRoS.svg"
                alt="Illustration for Mobile App Development Services"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Solution */}
      <div className="container-fluid">
        <div className="container">
          <h3 className="text-center fw-bold">OUR SOLUTIONS</h3>
          <h1 className="text-center fw-bold fs-1">Comprehensive Mobile App Solutions We Address</h1>
        </div>

        <div className="flex row px-lg-5 d-flex justify-content-center my-5">
          {cardData.map((item, index) => (
            <div
              key={item.id}
              className="card col-12 col-sm-2 col-md-3 col-lg-3"
              style={{ width: '20rem', height: '16rem' }}
              onClick={() => scrollToCard(item.id)}
            >
              <img className="mt-3" src={item.imgSrc} alt="" style={{ maxHeight: '100px', maxWidth: '100%' }} />
              <div className="card-body">
                <h5 className="card-title fw-bolder text-hover text-center mt-3">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Solutions Section */}
      <div className="container position-relative">
        {cardData.map((item, index) => (
          <div
            key={item.id}
            className="card mb-3 border border-2 shadow-none rounded-0 p-0 card-hidden"
            ref={(el) => (cardRefs.current[item.id] = el)} // Set ref for each card
          >
            <div className="row g-0">
              <div className="bg-light-yellow col-md-4 d-flex justify-content-center align-items-center" style={{ maxWidth: '100%', height: '240px' }}>
                <img
                  src={item.imgSrc}
                  className="img-fluid"
                  alt={item.title}
                  style={{ maxWidth: '30%', height: 'auto' }}
                />
              </div>

              <div className="col-md-8 col-12">
                <div className="card-body mt-4">
                  <h5 className="card-title fw-bolder fs-4 text-primary">{item.title}</h5>
                  {expandedCardId === item.id ? (
                    <p className="card-text text-dark-emphasis fw-semibold fs-5">{item.paragraph}</p>
                  ) : (
                    <p className="card-text text-dark-emphasis fw-semibold fs-5">{item.description}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="icon position-absolute fw-bold" onClick={() => handleCardClick(item.id)} style={{ cursor: 'pointer', right: '-20px', top: '80px' }}>
              {expandedCardId === item.id ? <MdOutlineCancel size={40} /> : <CiCirclePlus size={40} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileAppDevelopement;
