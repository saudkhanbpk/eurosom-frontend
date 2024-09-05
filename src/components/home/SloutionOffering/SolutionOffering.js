import React, { useState } from 'react';
import './SolutionOffering.css';

const sections = [
  'Cyber Security',
  'Data Center',
  'Digital Forensics',
  'Information Security',
  'Network & Surveillance'
];

const images = {
  'Cyber Security': [
    'https://api.lucerna-tech.com/storage/solutions/Px3sis6hoKXxsFjqgR3Yo4esB5mDF5sJIPoXbkpI.svg',
    'https://api.lucerna-tech.com/storage/solutions/Px3sis6hoKXxsFjqgR3Yo4esB5mDF5sJIPoXbkpI.svg',
    'https://api.lucerna-tech.com/storage/solutions/Px3sis6hoKXxsFjqgR3Yo4esB5mDF5sJIPoXbkpI.svg',
    'https://api.lucerna-tech.com/storage/solutions/Px3sis6hoKXxsFjqgR3Yo4esB5mDF5sJIPoXbkpI.svg',
    'https://api.lucerna-tech.com/storage/solutions/Px3sis6hoKXxsFjqgR3Yo4esB5mDF5sJIPoXbkpI.svg'
  ],
  'Data Center': [
    'https://api.lucerna-tech.com/storage/solutions/5JAO5h3y2UEOfUgal8Ju6VYq8DiLPIwynlptG5jR.svg',
    'https://api.lucerna-tech.com/storage/solutions/5JAO5h3y2UEOfUgal8Ju6VYq8DiLPIwynlptG5jR.svg',
    'https://api.lucerna-tech.com/storage/solutions/Px3sis6hoKXxsFjqgR3Yo4esB5mDF5sJIPoXbkpI.svg',
    'https://api.lucerna-tech.com/storage/solutions/5JAO5h3y2UEOfUgal8Ju6VYq8DiLPIwynlptG5jR.svg',
    'https://api.lucerna-tech.com/storage/solutions/Px3sis6hoKXxsFjqgR3Yo4esB5mDF5sJIPoXbkpI.svg'
  ],
  'Digital Forensics': [
    'https://api.lucerna-tech.com/storage/solutions/MMe46eIW9YAbQW3NYylGRk1C6Rph8AHKpE8qDnk8.svg',
    'https://api.lucerna-tech.com/storage/solutions/5JAO5h3y2UEOfUgal8Ju6VYq8DiLPIwynlptG5jR.svg',
    'https://api.lucerna-tech.com/storage/solutions/Px3sis6hoKXxsFjqgR3Yo4esB5mDF5sJIPoXbkpI.svg',
    'https://api.lucerna-tech.com/storage/solutions/5JAO5h3y2UEOfUgal8Ju6VYq8DiLPIwynlptG5jR.svg',
    'https://api.lucerna-tech.com/storage/solutions/Px3sis6hoKXxsFjqgR3Yo4esB5mDF5sJIPoXbkpI.svg'
  ],
  'Information Security': [
    'https://api.lucerna-tech.com/storage/solutions/Px3sis6hoKXxsFjqgR3Yo4esB5mDF5sJIPoXbkpI.svg',
    'https://api.lucerna-tech.com/storage/solutions/CEShK3kkwmKpRFnqNlFWE4Ww7FhKTApRqoDiGLlU.svg',
    'https://api.lucerna-tech.com/storage/solutions/Px3sis6hoKXxsFjqgR3Yo4esB5mDF5sJIPoXbkpI.svg',
    'https://api.lucerna-tech.com/storage/solutions/CEShK3kkwmKpRFnqNlFWE4Ww7FhKTApRqoDiGLlU.svg',
    'https://api.lucerna-tech.com/storage/solutions/CEShK3kkwmKpRFnqNlFWE4Ww7FhKTApRqoDiGLlU.svg'
  ],
  'Network & Surveillance': [
    'https://api.lucerna-tech.com/storage/solutions/vgRLRmogfzEjvTVzXF1gveaqfs1aqcuIrFMdeSsi.svg',
    'https://api.lucerna-tech.com/storage/solutions/vgRLRmogfzEjvTVzXF1gveaqfs1aqcuIrFMdeSsi.svg',
    'https://api.lucerna-tech.com/storage/solutions/vgRLRmogfzEjvTVzXF1gveaqfs1aqcuIrFMdeSsi.svg',
    'https://api.lucerna-tech.com/storage/solutions/vgRLRmogfzEjvTVzXF1gveaqfs1aqcuIrFMdeSsi.svg',
    'https://api.lucerna-tech.com/storage/solutions/vgRLRmogfzEjvTVzXF1gveaqfs1aqcuIrFMdeSsi.svg'
  ]
};

const SolutionOffering = () => {
  const [activeSection, setActiveSection] = useState('Data Center');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='container-fluid my-5 pt-5' style={{ backgroundColor: "#e8f4ff"}}>
      <div className="container">
        <div className="text-center">
          <h4 className=' fw-bold fs-3'>SOLUTIONS OFFERING</h4>
          <h1 className='text-primary fw-bolder'>Elevate Success - Tailored Services, Tailored Solutions!</h1>
        </div>

        {/* Top Button Section */}
        <div className="d-flex justify-content-center flex-wrap mt-4 gap-2">
          {sections.map((section) => (
            <button
              key={section}
              className={`button mx-2 text-nowrap fw-bolder  ${activeSection === section ? 'active' : ''}`}
              onClick={() => handleSectionChange(section)}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: activeSection === section ? 'blue' : 'inherit',
                borderBottom: activeSection === section ? '4px solid blue'  : 'none'
              }}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Content Display Based on Active Section */}
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 mt-5 me-2">
  {images[activeSection].map((image, index) => (
    <div key={index} className="text-center">
      <img
        src={image}
        alt={activeSection}
        className="img-fluid imge"
      />
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default SolutionOffering;
