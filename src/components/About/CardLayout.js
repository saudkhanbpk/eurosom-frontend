import React from 'react';

const Card = ({ title, description, imgSrc, imgAlt, bgColor }) => {
  return (
    <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-3"> {/* Added mb-3 for vertical spacing */}
      <div className="border p-lg-4 rounded-full" style={{ background: bgColor }}>
        {/* Use flex-column for mobile and flex-row for larger screens */}
        <div className="d-flex flex-column flex-md-row flex-sm-row justify-content-between align-items-center">
          <div>
            <h3 className='fw-bolder'>{title}</h3>
            <p className='fw-bold'>{description}</p>
          </div>
          <div className='mt-3 mt-md-0'> {/* Added margin-top for mobile to add space between text and image */}
            <img src={imgSrc} alt={imgAlt} className="img-fluid" style={{ width: '180px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};


const StatsCard = ({ value, description, imgSrc, imgAlt }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-12"> 
      <div className="border rounded-full" style={{ background: "#FAE6DF", padding: "10px", height: "190px" }}> {/* Reduced height and padding */}
        <div className="text-center">
          <h2 className='fw-bolder'>{value}</h2>
          <p className='fw-bold ' style={{ fontSize: "14px" }}>{description}</p> {/* Reduced text size */}
          <img src={imgSrc} alt={imgAlt} className="img-fluid" style={{ width: '80px' }} /> {/* Reduced image size */}
        </div>
      </div>
    </div>
  );
};


const CardLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-3 mb-3 g-2 px-lg-5"> 
        <Card
          title="Part of ABM Info Tech"
          description="Pakistan's leading provider of technology services and solutions since 1983."
          imgSrc="https://www.lucerna-tech.com/assets/media/images/img1.svg"
          imgAlt="ABM Info Tech"
          bgColor="#e7dafe"
        />
        <StatsCard
          value="50+"
          description="Highly qualified professionals and accredited resources"
          imgSrc="https://api.lucerna-tech.com/storage/stats/Group%2023401.svg"
          imgAlt="Stats"
        />
        <StatsCard
          value="50+"
          description="Highly qualified professionals and accredited resources"
          imgSrc="https://api.lucerna-tech.com/storage/stats/Group%2023401.svg"
          imgAlt="Stats"
        />
      </div>

      <div className="row mb-5 g-2 px-lg-5"> 
        <Card
          title="Part of ABM Info Tech"
          description="Pakistan's leading provider of technology services and solutions since 1983."
          imgSrc="https://www.lucerna-tech.com/assets/media/images/img1.svg"
          imgAlt="ABM Info Tech"
          bgColor="#e7dafe"
        />
        <Card
          title="Part of ABM Info Tech"
          description="Pakistan's leading provider of technology services and solutions since 1983."
          imgSrc="https://www.lucerna-tech.com/assets/media/images/img1.svg"
          imgAlt="ABM Info Tech"
          bgColor="#e7dafe"
        />
      </div>
    </div>
  );
};

export default CardLayout;
