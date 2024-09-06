import React from 'react'
import CardLayout from './CardLayout'

const About = () => {
  return (
    <div>
      <div className="container-fluid pt-5 mt-5 my-5 p-lg-5">
        <div className="row d-flex justify-content-around align-items-center">
          <div className="col-md-6 col-12">
            <h1 className="text-primary fs-1 fw-bolder">
            Empowering Businesses through Tech Expertise and Limitless Innovation
            </h1>
            <p className="fs-4 fw-semibold text-dark-emphasis">
            Welcome to Lucerna Tech, Your Global IT Partner for Specialized services & Staff Augmentation. With a global reach and expertise in IT staff augmentation, we seamlessly integrate skilled professionals into your teams to drive digital success.
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

      <div className="container-fluid">
<div className="container-fluid px-lg-5 border">
  <div className="text-center px-lg-3">
    <h4 className='fw-bold'>ABOUT US</h4>
    <h1 className='fw-bolder fs-1 text-primary'>Introduction</h1>
    <p className='fs-5'>Since 1983, ABM Info Tech (Private) Limited has been a leading provider of Information Technology Solutions & Services in Pakistan. Expanding our portfolio in 2021, we introduced Lucerna Tech, a specialized company offering professional services in various domains including Information Systems & Security, Cyber Security, Infrastructure, E-commerce, Project Management, Software Design & Development, Social Media Management, and Digital Marketing.</p>
  </div>
</div>
      </div>
      <div className='px-lg-3'>
      <CardLayout/>

      </div>

    </div>
  )
}

export default About