import React from 'react';

const BusinessStaff = () => {
  return (
    <div className='container-fluid my-5 mt-5 pt-5'>
      <div className='text-center'>
        <h2 className="fw-bolder text-dark">WHO WE ARE?</h2>
        <h1 className="fw-bolder fs-1 text-primary">Boost Business with IT Staff Augmentation</h1>
      </div>
      <div className="container g-3">
        <div className="row rounded-pill">
          
          <div className='d-flex justify-content-between gap-2 flex-col'>
            
            {/* Card 1 Start */}
            <div className="col-md-6 col-12  shadow-sm border d-lg-flex justify-content-between align-items-center rounded mb-3" style={{ backgroundColor: '#e7dafe' }}>
              <div className="text col-md-8 col-12 p-md-5">
                <h4 className='fw-bold'>Part of ABM Info Tech</h4>
                <p className='fw-semibold fs-5'>Pakistan's leading provider of technology services and solutions since 1983</p>
              </div>
              <div className="col-md-3 col-12 d-flex justify-content-center align-items-center">
                <img
                  src="https://api.lucerna-tech.com/storage/stats/Group%2023399.svg"
                  alt="ABM Info Tech"
                  className="img-fluid w-75 w-md-100"
                  style={{ maxWidth: '160px' }}
                />
              </div>
            </div>
            {/* Card 1 End */}

            {/* Card 2 Start */}
            <div className="col-md-3  shadow-sm col-12 border rounded mb-3" style={{ background: 'rgb(250, 230, 223)' }}>
              <div className="text-center">
                <h1 className='fw-bolder'>50+</h1>
                <p className='fs-5 fw-medium'>Highly qualified professionals and accredited resources</p>
              </div>
              <div className='d-flex justify-content-center'>
                <img
                  src="https://api.lucerna-tech.com/storage/stats/Group%2023429.svg"
                  alt="Professionals"
                  className="img-fluid"
                  style={{ width: '150px' }}
                />
              </div>
            </div>
            {/* Card 2 End */}

            {/* Card 3 Start */}
            <div className="col-md-3 shadow-sm col-12 border rounded mb-3" style={{ background: 'rgb(212, 240, 253)' }}>
              <div className="text-center">
                <h1 className='fw-bolder'>50+</h1>
                <p className='fs-5 fw-medium'>Highly qualified professionals and accredited resources</p>
              </div>
              <div className='d-flex justify-content-center'>
                <img
                  src="https://api.lucerna-tech.com/storage/stats/Group%2023429.svg"
                  alt="Professionals"
                  className="img-fluid"
                  style={{ width: '150px' }}
                />
              </div>
            </div>
            {/* Card 3 End */}
          </div>
          

        </div>

        <div className="row">
          <div className='d-flex justify-content-between gap-3'>
            {/* Card 4 Start */}
          <div className="col-md-6 col-12 shadow-sm flex-col border d-lg-flex justify-content-between align-items-center rounded mb-3" style={{ background: 'rgb(168, 232, 243)' }}>
              <div className="text col-md-8 col-12 p-md-5">
                <h4 className='fw-bold'>Part of ABM Info Tech</h4>
                <p className='fs-5 fw-semibold'>Pakistan's leading provider of technology services and solutions since 1983</p>
              </div>
              <div className="col-md-3 col-12 d-flex justify-content-center align-items-center">
                <img
                  src="https://api.lucerna-tech.com/storage/stats/Group%2023399.svg"
                  alt="ABM Info Tech"
                  className="img-fluid w-75 w-md-100"
                  style={{ maxWidth: '160px' }}
                />
              </div>
            </div>
            {/* Card 4 End */}

            {/* Card 5 Start */}
            <div className="col-md-6 col-12 shadow-sm  border d-lg-flex justify-content-between align-items-center rounded mb-3" style={{ background: 'rgb(254, 181, 167)' }}>
              <div className="text col-md-8 col-12 p-md-5">
                <h4 className='fw-bold'>Part of ABM Info Tech</h4>
                <p className='fs-5 fw-semibold'>Pakistan's leading provider of technology services and solutions since 1983</p>
              </div>
              <div className="col-md-3 col-12 d-flex justify-content-center align-items-center">
                <img
                  src="https://api.lucerna-tech.com/storage/stats/Group%2023399.svg"
                  alt="ABM Info Tech"
                  className="img-fluid w-75 w-md-100"
                  style={{ maxWidth: '160px' }}
                />
              </div>
            </div>
            {/* Card 5 End */}
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default BusinessStaff;
