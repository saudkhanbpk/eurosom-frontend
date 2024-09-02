import React from 'react'
import HireDeveloperHero from './HireDeveloperHero'
import './HireDeveloper.css'
import OurDevelopers from './OurDevelopers'
const HireDeveloper = () => {
  return (
    <div>
       <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <HireDeveloperHero />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <OurDevelopers />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HireDeveloper