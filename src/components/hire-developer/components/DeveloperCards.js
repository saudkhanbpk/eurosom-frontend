import React from "react";

const DeveloperCards = ({
  imageSrc,
  role,
  name,
  hourlyRate,
  availability,
  techIcons,
  onHireClick,
}) => {
  return (
    <div className="row d-flex flex-wrap   shadow-lg bg-white border p-3 col-md-12 ">
      {/* Developer Image */}
      <div className=" text-center">
        <img
          style={{ width: "180px", height: "150px", objectFit: "cover" }}
          className="item-center col-12 col-sm-12 col-md-6 object-cover"
          src={imageSrc}
          alt="Avatar"
        />
      </div>

      {/* Role */}
      <div className="text-primary rounded-pill col-12 mt-0 text-center">
        <p>{role}</p>
      </div>

      {/* Name */}
      <div className="text-center font-bold mt-0">
        <p>{name}</p>
      </div>

      {/* Rate and Availability */}
      <div className="flex items-center justify-center gap-4 text-center">
        <img
          style={{ width: "20px", height: "20px", objectFit: "cover" }}
          className=" object-cover"
          src="https://www.lucerna-tech.com/assets/media/images/dev/dev3.svg"
          alt="Hourly Rate"
        />
        <span>{hourlyRate}</span>
        <img
          style={{ width: "20px", height: "20px", objectFit: "cover" }}
          className=" object-cover"
          src="https://www.lucerna-tech.com/assets/media/images/dev/dev4.svg"
          alt="Availability"
        />
        <span>{availability}</span>
      </div>

      {/* Technology Icons */}
      <div className="flex items-center justify-center gap-5 mt-3">
        {techIcons.map((icon, index) => (
          <img
            style={{ width: "20px", height: "20px", objectFit: "cover" }}
            key={index}
            className="object-cover"
            src={icon}
            alt={`Tech icon ${index + 1}`}
          />
        ))}
      </div>

      {/* Hire Button */}
      <button
        className="bg-primary text-white rounded-pill px-4 mt-3"
        onClick={onHireClick}
      >
        Hire Now
      </button>
    </div>
  );
};
export default DeveloperCards;
