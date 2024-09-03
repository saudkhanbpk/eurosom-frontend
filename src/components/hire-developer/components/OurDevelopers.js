
import React, { useState } from "react";
import DeveloperCards from "./DeveloperCards";

const OurDevelopers = () => {
  const [selectedTech, setSelectedTech] = useState(""); 

  const developerData = [
    {
      name: "Syed Asad",
      role: "Fullstack Developer",
      hourlyRate: "$/hr",
      availability: "Available",
      skills: ["laravel", "flutter", ".net"],
      imageSrc: "https://api.lucerna-tech.com/storage/jobs/BptjCdJPSfQxdat2vV5mHHG8O06dgcMwD2DoVfLa.svg",
      techIcons: [
        "https://api.lucerna-tech.com/storage/technologies/icon/bFOj1rzBbzXjNkGcBJd2wS1oDlceUUyzQakbqhbT.svg",
        "https://api.lucerna-tech.com/storage/technologies/icon/uzPJjxD8RT6FJpExgt9dUTdHLztPo52Afn4cEk1n.svg",
        "https://api.lucerna-tech.com/storage/technologies/icon/Qi6exHMwOweJZNoNo8sDWvSMbLHmFItTEPcIZgJh.svg",
      ],
    },
    {
      name: "John Doe",
      role: "Backend Developer",
      hourlyRate: "$/hr",
      availability: "Unavailable",
      skills: ["node", "python", "java"],
      imageSrc: "https://api.lucerna-tech.com/storage/jobs/BptjCdJPSfQxdat2vV5mHHG8O06dgcMwD2DoVfLa.svg",
      techIcons: [
        "https://api.lucerna-tech.com/storage/technologies/icon/bFOj1rzBbzXjNkGcBJd2wS1oDlceUUyzQakbqhbT.svg",
        "https://api.lucerna-tech.com/storage/technologies/icon/uzPJjxD8RT6FJpExgt9dUTdHLztPo52Afn4cEk1n.svg",
        "https://api.lucerna-tech.com/storage/technologies/icon/Qi6exHMwOweJZNoNo8sDWvSMbLHmFItTEPcIZgJh.svg",
      ],
    },
    {
      name: "Emily Smith",
      role: "Frontend Developer",
      hourlyRate: "$/hr",
      availability: "Available",
      skills: ["react js", "vue js", "figma"],
      imageSrc: "https://api.lucerna-tech.com/storage/jobs/BptjCdJPSfQxdat2vV5mHHG8O06dgcMwD2DoVfLa.svg",
      techIcons: [
        "https://api.lucerna-tech.com/storage/technologies/icon/bFOj1rzBbzXjNkGcBJd2wS1oDlceUUyzQakbqhbT.svg",
        "https://api.lucerna-tech.com/storage/technologies/icon/uzPJjxD8RT6FJpExgt9dUTdHLztPo52Afn4cEk1n.svg",
        "https://api.lucerna-tech.com/storage/technologies/icon/Qi6exHMwOweJZNoNo8sDWvSMbLHmFItTEPcIZgJh.svg",
      ],
    },
    {
      name: "Michael Johnson",
      role: "UI/UX Designer",
      hourlyRate: "$/hr",
      availability: "Available",
      skills: ["figma", "adobe design suite"],
      imageSrc: "https://api.lucerna-tech.com/storage/jobs/BptjCdJPSfQxdat2vV5mHHG8O06dgcMwD2DoVfLa.svg",
      techIcons: [
        "https://api.lucerna-tech.com/storage/technologies/icon/bFOj1rzBbzXjNkGcBJd2wS1oDlceUUyzQakbqhbT.svg",
        "https://api.lucerna-tech.com/storage/technologies/icon/uzPJjxD8RT6FJpExgt9dUTdHLztPo52Afn4cEk1n.svg",
        "https://api.lucerna-tech.com/storage/technologies/icon/Qi6exHMwOweJZNoNo8sDWvSMbLHmFItTEPcIZgJh.svg",
      ],
    },
    {
      name: "Sarah Lee",
      role: "Mobile App Developer",
      hourlyRate: "$/hr",
      availability: "Available",
      skills: ["flutter", "react js", "node"],
      imageSrc: "https://api.lucerna-tech.com/storage/jobs/BptjCdJPSfQxdat2vV5mHHG8O06dgcMwD2DoVfLa.svg",
      techIcons: [
        "https://api.lucerna-tech.com/storage/technologies/icon/bFOj1rzBbzXjNkGcBJd2wS1oDlceUUyzQakbqhbT.svg",
        "https://api.lucerna-tech.com/storage/technologies/icon/uzPJjxD8RT6FJpExgt9dUTdHLztPo52Afn4cEk1n.svg",
        "https://api.lucerna-tech.com/storage/technologies/icon/Qi6exHMwOweJZNoNo8sDWvSMbLHmFItTEPcIZgJh.svg",
      ],
    },
    {
      name: "David Brown",
      role: "Software Engineer",
      hourlyRate: "$/hr",
      availability: "Unavailable",
      skills: ["python", "java", "php"],
      imageSrc: "https://api.lucerna-tech.com/storage/jobs/BptjCdJPSfQxdat2vV5mHHG8O06dgcMwD2DoVfLa.svg",
      techIcons: [
        "https://api.lucerna-tech.com/storage/technologies/icon/bFOj1rzBbzXjNkGcBJd2wS1oDlceUUyzQakbqhbT.svg",
        "https://api.lucerna-tech.com/storage/technologies/icon/uzPJjxD8RT6FJpExgt9dUTdHLztPo52Afn4cEk1n.svg",
        "https://api.lucerna-tech.com/storage/technologies/icon/Qi6exHMwOweJZNoNo8sDWvSMbLHmFItTEPcIZgJh.svg",
      ],
    },
    {
      name: "Laura Wilson",
      role: "DevOps Engineer",
      hourlyRate: "$/hr",
      availability: "Available",
      skills: ["node", "python", "javascript"],
      imageSrc: "https://api.lucerna-tech.com/storage/jobs/BptjCdJPSfQxdat2vV5mHHG8O06dgcMwD2DoVfLa.svg",
      techIcons: [
        "https://api.lucerna-tech.com/storage/technologies/icon/bFOj1rzBbzXjNkGcBJd2wS1oDlceUUyzQakbqhbT.svg",
        "https://api.lucerna-tech.com/storage/technologies/icon/uzPJjxD8RT6FJpExgt9dUTdHLztPo52Afn4cEk1n.svg",
        "https://api.lucerna-tech.com/storage/technologies/icon/Qi6exHMwOweJZNoNo8sDWvSMbLHmFItTEPcIZgJh.svg",
      ],
    },
    // Add more developer data objects as needed
  ];

  // Filter developers based on selected technology, or show all if none selected
  const filteredDevelopers = selectedTech
    ? developerData.filter((developer) =>
        developer.skills.some(skill => skill.toLowerCase() === selectedTech.toLowerCase())
      )
    : developerData;

  return (
    <div className="items-center  mt-5 position-relative" style={{zIndex:2}}>
      <div className="text-center">
        <h3>Our Developers</h3>
        <h1 className="text-primary">Unlock Your Vision - Hire a Developer Today!</h1>
      </div>
      <div className="text-center mt-6" style={{cursor:'pointer'}}>
        <ul className="flex flex-wrap cursor-pointer justify-center gap-4">
          {[
            ".Net",
            "Flutter",
            "Laravel",
            "React js",
            "Vue js",
            "Node js",
            "Python",
            "PHP",
            "JavaScript",
            "FIGMA",
            "Adobe Design Suite",
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
              <div key={index} className="col-12 gap-0 col-md-4 mb-4">
                <DeveloperCards {...developer} />
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

export default OurDevelopers;
