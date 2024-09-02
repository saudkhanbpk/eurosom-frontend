import React from 'react';
import './Slidebar.css'; // Import your custom CSS file

const Slidebar = () => {
  const slidebarData = [
    {
      id: 1,
      title: 'Bringing your Ideas to Life with Comprehensive Mobile App Development Services',
      description: 'At Lucerna Tech, we leverage our extensive technological expertise in artificial intelligence and machine learning development services to assist clients in delivering personalized experiences and customer convenience on a large scale. With our robust research and development capabilities, coupled with our expertise in developing artificial intelligence software and custom machine learning solutions, we enable clients to explore untapped market segments, enhance operational efficiency, and achieve tangible business outcomes.',
      image: 'https://api.lucerna-tech.com/storage/Banner-image/sFmzPiprtr2YAIj9s2Xfd1mhM4dUGsAstExMCRoS.svg'
    },
    {
      id: 2,
      title: 'Harness the power of Big Data and Analytics to Unlock Information',
      description: 'At Lucerna Tech, we leverage our extensive technological expertise in artificial intelligence and machine learning development services to assist clients in delivering personalized experiences and customer convenience on a large scale. With our robust research and development capabilities, coupled with our expertise in developing artificial intelligence software and custom machine learning solutions, we enable clients to explore untapped market segments, enhance operational efficiency, and achieve tangible business outcomes.',
      image: 'https://api.lucerna-tech.com/storage/Banner-image/mKhy7DGc7vKHt1eYKvhd0yWnM2jIpKRFF5JUsu43.svg'
    },
    {
      id: 3,
      title: 'Eurosom Tech, we leverage our extensive technological expertise',
      description: 'We at Lucerna Tech specialize in providing cutting-edge Big Data and Analytics Services. Our company is dedicated to helping businesses unlock the full potential of their data by offering comprehensive solutions tailored to their specific needs. With our expertise and advanced technologies, we empower organizations to gain valuable insights, make data-driven decisions, and drive innovation. Discover the limitless possibilities of data with our exceptional Big Data and Analytics services.',
      image: 'https://images.unsplash.com/photo-1724676326198-4d3dcb182d9c?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  return (
    <div className="container-fluid my-5  ">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
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
        <div className="carousel-inner">
          {slidebarData.map((slide, index) => (
            <div key={slide.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="row mt-5 pt-4">
                <div className="col-md-6">
                  <div className="carousel-content p-4">
                    <h2 className='text-primary fs-1 fw-bolder'>{slide.title}</h2>
                    <p className='fw-semibold fs-5'>{slide.description}</p>
                    <button className="btn btn-primary rounded-pill mt-3">Contact Eurosom</button>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={slide.image} className="d-block w-100" alt={slide.title} style={{ height: '300px' }} />
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
