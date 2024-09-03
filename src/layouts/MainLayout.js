// src/layouts/MainLayout.js
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavigationBar />
      <main>
        <Outlet /> {/* This will render the matched child route */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
