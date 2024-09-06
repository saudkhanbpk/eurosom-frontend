import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ChatPopUp from '../../../ChatPopUp';
import cardData from '../../../Services/cardData';


const ArtificialInteligence = () => {
   // Create a ref for each detailed card
   const cardRefs = useRef([]);

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
           card.classList.add('card-visible');
           card.classList.remove('card-hidden');
         } else {
           card.classList.add('card-hidden');
           card.classList.remove('card-visible');
         }
       });
     };
 
     window.addEventListener('scroll', handleScroll);
     handleScroll(); // Initialize on component mount
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);



  return (
    <>
    <ChatPopUp/>
    <div>
      {/* SEO Configuration */}
      <Helmet>
        <title>Mobile App Development Services - Comprehensive Solutions</title>
        <meta
          name="description"
          content="Bring your ideas to life with our mobile app development services. We offer comprehensive solutions to build high-performance apps for your business."
        />
        <meta
          name="keywords"
          content="mobile app development, app development services, hire app developers, custom app solutions, cross-platform apps"
        />
        <link rel="canonical" href="https://Eurosom.com/mobile-app-development" />
      </Helmet>

      <div className="container-fluid pt-5 mt-5 my-5 p-lg-5">
        <div className="row d-flex justify-content-around align-items-center ">
          <div className="col-md-6 col-12">
            <h1 className="text-primary fs-1 fw-bolder">
              Bringing your Ideas to Life with Comprehensive Mobile App Development Services
            </h1>
            <p className="fs-4 fw-semibold text-dark-emphasis">
              Grab immediate attention and establish a strong connection with your users by offering a captivating mobile app experience. Get mobile app development services at a highly competitive price that will help you to propel your business forward.
            </p>
            <button className="btn btn-primary rounded-pill mt-3">Contact Eurosom</button>
          </div>
          <div className="col-md-4 col-12 cont-image ">
            <img
              src="https://api.lucerna-tech.com/storage/Banner-image/sFmzPiprtr2YAIj9s2Xfd1mhM4dUGsAstExMCRoS.svg"
              alt="Illustration for Mobile App Development Services"
              className="img-fluid "
            />
          </div>
        </div>
      </div>

      {/* Our Solution */}
      <div className="container-fluid">
        <div className="container">
          <h3 className="text-center fw-bold">OUR SOLUTIONS</h3>
          <h1 className="text-center text-primary fw-bold fs-1">Comprehensive Mobile App Solutions We Address</h1>
        </div>

        <div className="row px-lg-5 d-flex justify-content-center my-5">
          {cardData.map((item) => (
            <div
              key={item.id}
              className="card col-12 col-sm-2 col-md-3 col-lg-3"
              style={{ width: '20rem', height: '16rem' }}
              onClick={() => scrollToCard(item.id)}
            >
              <img className="mt-3" src={item.imgSrc} alt={item.title} style={{ maxHeight: '100px', maxWidth: '100%' }} />
              <div className="card-body">
                <h5 className="card-title fw-bolder text-hover text-center mt-3">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Solutions Section */}
      <div className="container">
        {cardData.map((item) => (
          <div
            key={item.id}
            className="card mb-3 border border-2 shadow-none rounded-0 p-0 card-hidden"
            ref={(el) => (cardRefs.current[item.id] = el)} // Set ref for each card
          >
            <div className="row g-0">
              {/* Image Section */}
              <div
                className="col-md-4 d-flex justify-content-center align-items-center bg-light"
                style={{ maxWidth: '100%', height: '240px', backgroundColor: '#f7f0ed' }}
              >
                <img
                  src={item.imgSrc}
                  className="img-fluid"
                  alt={item.title}
                  style={{ maxWidth: '30%', height: 'auto' }}
                />
              </div>

              {/* Text Section */}
              <div className="col-md-8 col-12">
                <div className="card-body-b px-2 mt-4">
                  <h5 className="card-title fw-bolder fs-4 text-primary">{item.title}</h5>
                  <p className="card-text text-dark-emphasis fw-semibold fs-5">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ArtificialInteligence;
