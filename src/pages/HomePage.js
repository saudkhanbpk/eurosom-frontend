import React from "react";
import Slidebar from "../components/home/slidebar/slidebar/Slidebar";
import ChatPopUp from "../components/ChatPopUp";
import BusinessStaff from "../components/home/BusinessStaff/BusinessStaff";

const HomePage = () => {
  return (
    <div className="position-relative" style={{ zIndex: 2 }}>
      <Slidebar />
      <BusinessStaff/>
      <ChatPopUp />
    </div>
  );
};

export default HomePage;
