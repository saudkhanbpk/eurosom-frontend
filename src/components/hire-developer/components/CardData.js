// import React, { useState } from "react";
// import DeveloperCards from "./DeveloperCards";

// const CardData = ({ selectedTechnology }) => {
//   const allDevelopers = [
//     {
//       imageSrc: "https://api.lucerna-tech.com/storage/jobs/BptjCdJPSfQxdat2vV5mHHG8O06dgcMwD2DoVfLa.svg",
//       role: "Fullstack Developer",
//       name: "Sayed Khan",
//       hourlyRate: "$/hr",
//       availability: "Available",
//       techIcons: [
//         "https://api.lucerna-tech.com/storage/technologies/icon/bFOj1rzBbzXjNkGcBJd2wS1oDlceUUyzQakbqhbT.svg",
//         "https://api.lucerna-tech.com/storage/technologies/icon/uzPJjxD8RT6FJpExgt9dUTdHLztPo52Afn4cEk1n.svg",
//         "https://api.lucerna-tech.com/storage/technologies/icon/Qi6exHMwOweJZNoNo8sDWvSMbLHmFItTEPcIZgJh.svg",
//       ],
//     },
//     // Add more developer objects as needed
//   ];

//   const filteredDevelopers = selectedTechnology
//     ? allDevelopers.filter((developer) =>
//         developer.techIcons.some((icon) =>
//           icon.includes(selectedTechnology.toLowerCase())
//         )
//       )
//     : allDevelopers;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       {filteredDevelopers.map((developer, index) => (
//         <DeveloperCards
//           key={index}
//           imageSrc={developer.imageSrc}
//           role={developer.role}
//           name={developer.name}
//           hourlyRate={developer.hourlyRate}
//           availability={developer.availability}
//           techIcons={developer.techIcons}
//           onHireClick={() => alert("Hire button clicked!")}
//         />
//       ))}
//     </div>
//   );
// };

// export default CardData;