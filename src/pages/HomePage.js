import React from "react";
import Slidebar from "../components/slidebar/Slidebar";
import ChatPopUp from "../components/ChatPopUp";
import TechStack from "../pages/technology-stack/TechStack";

const HomePage = () => {
  return (
    <div>
      <Slidebar />
      <div className=" row mt-5">
        <div className="col-md-12">
          <TechStack />
        </div>
      </div>
      <div className=" row ">
        <div className="col-md-12">
          <ChatPopUp />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
