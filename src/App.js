import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import "./App.css";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import CloudServices from "./pages/CloudServices";
import AIChatGpt from "./pages/AIChatGpt";
import CloudStorage from "./pages/CloudStorage";
import DataAnalytics from "./pages/DataAnalytics";
import MobileAppDevelopement from "./components/Services/MobileAppDevelopement";
import AlMLIoTApps from "./components/Services/AlMLIoTApps";
import BigDataAnalytics from "./components/Services/Big-Data-Analytics";
import CyberSecurity from "./components/Services/Cyber-Security";
import EnterpriseInformationManagement from "./components/Services/EnterpriseInformationManagement";
import Slidebar from "./components/home/slidebar/slidebar/Slidebar";
import Flutter from "./components/flutter/components/Flutter";
import ContactUs from "./components/contact-us/components/ContactUs";
import HireDeveloper from "./components/hire-developer/components/HireDeveloper";
import AppDeveloper from "./components/hire-developer/components/AppDeveloper";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* services routes */}
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/mobile-app-development"
          element={<MobileAppDevelopement />}
        />
        <Route
          path="/services/ai-ml-iot-applications"
          element={<AlMLIoTApps />}
        />
        <Route
          path="/services/big-data-analytics"
          element={<BigDataAnalytics />}
        />
        <Route path="/services/cyber-security" element={<CyberSecurity />} />
        <Route
          path="/services/enterprise-information-management"
          element={<EnterpriseInformationManagement />}
        />
        {/* services routes end */}

        <Route path="/solutions" element={<Solutions />} />
        <Route path="/app-developer" element={<AppDeveloper />} />

        <Route path="/cloud-services" element={<CloudServices />} />
        <Route path="/cloud-storage" element={<CloudStorage />} />
        <Route path="/ai-chatgpt" element={<AIChatGpt />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/data-analytics" element={<DataAnalytics />} />

        <Route path="/slidebar" element={<Slidebar />} />
        <Route path="/flutter-programming" element={<Flutter />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
