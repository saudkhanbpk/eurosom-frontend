
import React, { useState } from "react";
import TechStackCard from "./TechStackCard";

const TechStackBundles = () => {
  const [selectedTech, setSelectedTech] = useState(""); 

  const developerData = [
    {
      imageSrc: "https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg",
      skills: ["CMS", "Mobile"] // Example skills added
    },
    {
      imageSrc: "https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg",
      skills: ["Frontend", "Backend"] // Example skills added
    },
    {
      imageSrc: "https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg",
      skills: ["FronAI/ML Development", "Infra & DevOps"] // Example skills added
    },
    {
      imageSrc: "https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg",
      skills: ["CMS", "Database"] // Example skills added
    },
    {
      imageSrc: "https://api.lucerna-tech.com/storage/technologies/images/bC39f5wY6TgMYfWlGhiG9c5RQuVSLC3KRM6nTtpj.svg",
      skills: ["Frontend", "Backend"] 
    },
    // Add more developer objects with their skills as needed
  ];

  // Filter developers based on selected technology, or show all if none selected
  const filteredDevelopers = selectedTech
    ? developerData.filter((developer) =>
        developer.skills && developer.skills.some(skill => skill.toLowerCase() === selectedTech.toLowerCase())
      )
    : developerData;

  return (
    <div className="items-center mt-5 position-relative" style={{ zIndex: 2 }}>
      <div className="text-center">
        <h3>TECHNOLOGY STACK</h3>
        <h1 className="text-primary">Explore Boundless Potential - Our Tech Stack Awaits!</h1>
      </div>
      <div className="text-center mt-6" style={{ cursor: 'pointer' }}>
        <ul className="flex flex-wrap cursor-pointer justify-center gap-4">
          {[
            "Ai/ML Development",
            "Backend",
            "CMS",
            "Database",
            "Design",
            "Frontend",
            "Infra & DevOps",
            "Mobile",
          ].map((tech) => (
            <li
              key={tech}
              className={`cursor-pointer ${
                selectedTech === tech ? "text-primary font-bold" : ""
              }`}
              onClick={() => setSelectedTech(tech === selectedTech ? "" : tech)} // Toggle selection
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="container mt-6">
        <div className="row justify-content-center">
          {filteredDevelopers.length > 0 ? (
            filteredDevelopers.map((developer, index) => (
              <div key={index} className="col-12 gap-0 col-md-3 mb-4">
                <TechStackCard {...developer} />
              </div>
            ))
          ) : (
            <p className="text-center">No developers available for the selected technology.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechStackBundles;
