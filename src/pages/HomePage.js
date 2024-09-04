import React from "react";
import Slidebar from "../components/home/slidebar/slidebar/Slidebar";
import ChatPopUp from "../components/ChatPopUp";
import BusinessStaff from "../components/home/BusinessStaff/BusinessStaff";
import TechStack from "../components/home/tech-stack/components/TechStack";
import EmpowerBusiness from "../components/home/EmpowerBusiness/EmpowerBusiness";

const HomePage = () => {
  return (
    <div className="position-relative" style={{ zIndex: 2 }}>
     
      <div className=" row">
        <div className="col-md-12">
        <Slidebar  />
        </div>
      </div>
      <div className=" row mt-5">
        <div className="col-md-12">
        <BusinessStaff/>
        </div>
      </div>
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
