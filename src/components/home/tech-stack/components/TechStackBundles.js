import React, { useState } from 'react';


const sections = [
  'AI/Ml Development',
  'Backend',
  'CMS',
  'DataBase',
  'Design',
  'Frontend',
  'Infra & DevOps',
  'Mobile',

];

const images = {
  'AI/Ml Development': [
    'https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg',

    
  ],
  'Backend': [
    'https://api.lucerna-tech.com/storage/technologies/images/FzzLkrgnEO2rWSXEh7cy3k7lR5zr7VU2lRX5C3a3.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/FzzLkrgnEO2rWSXEh7cy3k7lR5zr7VU2lRX5C3a3.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/FzzLkrgnEO2rWSXEh7cy3k7lR5zr7VU2lRX5C3a3.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/FzzLkrgnEO2rWSXEh7cy3k7lR5zr7VU2lRX5C3a3.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/FzzLkrgnEO2rWSXEh7cy3k7lR5zr7VU2lRX5C3a3.svg',


  ],
  'CMS': [
    'https://api.lucerna-tech.com/storage/technologies/images/vtjymMLpy9LO330p7vkWksmtzrm6Vzx8SZ6ce2JL.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/vtjymMLpy9LO330p7vkWksmtzrm6Vzx8SZ6ce2JL.svg',
    'https://api.lucerna-tech.com/storage/solutions/Px3sis6hoKXxsFjqgR3Yo4esB5mDF5sJIPoXbkpI.svg',
    'https://api.lucerna-tech.com/storage/solutions/5JAO5h3y2UEOfUgal8Ju6VYq8DiLPIwynlptG5jR.svg',
    'https://api.lucerna-tech.com/storage/solutions/Px3sis6hoKXxsFjqgR3Yo4esB5mDF5sJIPoXbkpI.svg'
  ],
  'DataBase': [
    'https://api.lucerna-tech.com/storage/solutions/Px3sis6hoKXxsFjqgR3Yo4esB5mDF5sJIPoXbkpI.svg',
    'https://api.lucerna-tech.com/storage/solutions/CEShK3kkwmKpRFnqNlFWE4Ww7FhKTApRqoDiGLlU.svg',
    'https://api.lucerna-tech.com/storage/solutions/Px3sis6hoKXxsFjqgR3Yo4esB5mDF5sJIPoXbkpI.svg',
    'https://api.lucerna-tech.com/storage/solutions/CEShK3kkwmKpRFnqNlFWE4Ww7FhKTApRqoDiGLlU.svg',
    'https://api.lucerna-tech.com/storage/solutions/CEShK3kkwmKpRFnqNlFWE4Ww7FhKTApRqoDiGLlU.svg'
  ],
  'Design': [
    'https://api.lucerna-tech.com/storage/solutions/vgRLRmogfzEjvTVzXF1gveaqfs1aqcuIrFMdeSsi.svg',
    'https://api.lucerna-tech.com/storage/solutions/vgRLRmogfzEjvTVzXF1gveaqfs1aqcuIrFMdeSsi.svg',
    'https://api.lucerna-tech.com/storage/solutions/vgRLRmogfzEjvTVzXF1gveaqfs1aqcuIrFMdeSsi.svg',
    'https://api.lucerna-tech.com/storage/solutions/vgRLRmogfzEjvTVzXF1gveaqfs1aqcuIrFMdeSsi.svg',
    'https://api.lucerna-tech.com/storage/solutions/vgRLRmogfzEjvTVzXF1gveaqfs1aqcuIrFMdeSsi.svg'
  ],
  'Frontend': [
    'https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg',

    
  ],
  'Infra & DevOps': [
    'https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg',

    
  ],
  'Mobile': [
    'https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg',
    'https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg',

    
  ],
};

const SolutionOffering = () => {
  const [activeSection, setActiveSection] = useState('AI/Ml Development');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='container-fluid pt-5 bg-light' >
      <div className="container">
        <div className="text-center">
          <h4 className=' fw-bold fs-3'>TECHNOLOGY STACK</h4>
          <h1 className='text-primary fw-bolder'>Explore Boundless Potential - Our Tech Stack Awaits!</h1>
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
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 mt-5 me-2 ">
  {images[activeSection].map((image, index) => (
    <div key={index} className="text-center ">
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
