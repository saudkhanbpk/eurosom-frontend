import React from "react";
import Slidebar from "../components/home/slidebar/slidebar/Slidebar";
import ChatPopUp from "../components/ChatPopUp";
import TechStack from "../pages/technology-stack/TechStack";
import BusinessStaff from "../components/home/BusinessStaff/BusinessStaff";
import EmpowerBusiness from "../components/home/EmpowerBusiness/EmpowerBusiness";

const HomePage = () => {
  return (
    <div className="position-relative" style={{ zIndex: 2 }}>
      <Slidebar  />
      <BusinessStaff/>
      <EmpowerBusiness/>
      <div className=" row mt-5">
        <div className="col-md-12">
          <TechStack />
        </div>
      </div>
      <div className=" row ">
        <div className="col-md-12">
          <ChatPopUp  />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
