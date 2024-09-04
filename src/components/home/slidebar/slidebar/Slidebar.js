import React from 'react';
import './Slidebar.css'; // Import your custom CSS file

const Slidebar = () => {
  const slidebarData = [
    {
      id: 1,
      title: 'Maximize Efficiency with our top-tier Outsourcing Services, tailored for professionals and industry experts like you',
      description: 'At Lucerna Tech, we leverage our extensive technological expertise in artificial intelligence and machine learning development services to assist clients in delivering personalized experiences and customer convenience on a large scale. With our robust research  outcomes.',
      image: 'https://api.lucerna-tech.com/storage/banner-images/main-banner-1.png'
    },
    {
      id: 2,
      title: 'Harness the power of Big Data and Analytics to Unlock Information',
      description: 'At Lucerna Tech, we leverage our extensive technological expertise in artificial intelligence and machine learning development services to assist clients in delivering personalized experiences and customer convenience on a large scale. With our robust research .',
      image: 'https://api.lucerna-tech.com/storage/banner-images/main-banner-2.png'
    },
    {
      id: 3,
      title: 'Eurosom Tech, we leverage our extensive technological expertise',
      description: 'We at Lucerna Tech specialize in providing cutting-edge Big Data and Analytics Services. Our company is dedicated to helping .',
      image: 'https://api.lucerna-tech.com/storage/banner-images/main-banner-3.png'
    },
    {
      id:4,
      title:'slideer 4 added',
      description:'We at Lucerna Tech specialize in providing cutting-edge Big Data and Analytics Services. Our company is dedicated to helping businesses unlock the full potential of their data by offering comprehensive solutions tailored to their specific needs. ',
      image:'https://api.lucerna-tech.com/storage/banner-images/main-banner-4.png'
    }
  ];

  return (
    <div className=" container-fluid container-lg d-flex px-lg-3  mt-md-5 mt-2 mb-5  ">
      <div  id="carouselExampleIndicators" className=" carousel slide h-md-100vh" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-indicators custom-indicators">
          {slidebarData.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner ">
          {slidebarData.map((slide, index) => (
            <div key={slide.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="row mt-5 pt-4">
                <div className="col-lg-8 col-md-6 col-12">
                  <div className="carousel-content mt-lg-5 ">
                    <h2 className='text-primary fs-1 fw-bolder'>{slide.title}</h2>
                    <p className='fw-semibold fs-5'>{slide.description}</p>
                    <button className="btn btn-primary rounded-pill mt-3">Contact Eurosom</button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <img src={slide.image} className="d-block  " alt={slide.title}  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev custom-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next custom-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slidebar;
