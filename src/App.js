import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import "./App.css";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
// import CloudServices from "./pages/CloudServices";
import AIChatGpt from "./pages/AIChatGpt";
import CloudStorage from "./pages/CloudStorage";
import DataAnalytics from "./pages/DataAnalytics";
import MobileAppDevelopement from "./components/Services/MobileAppDevelopement";
import AlMLIoTApps from "./components/Services/AlMLIoTApps";
import BigDataAnalytics from "./components/Services/Big-Data-Analytics";
import CloudServices from "./components/Services/CloudServices";

import CyberSecurity from "./components/Services/Cyber-Security";
import EnterpriseInformationManagement from "./components/Services/EnterpriseInformationManagement";
import Flutter from "./components/flutter/components/Flutter";
import ContactUs from "./components/contact-us/components/ContactUs";
import AppDeveloper from "./components/hire-developer/components/AppDeveloper";
import About from "./components/About/About";
import CloudInfrastructure from "./components/Solutions/CloudInfrastructure";
import DigitalWorkplace from "./components/Solutions/DigitalWorkplace";
import TechnologyServices from "./components/Solutions/TechnologyServices";
import ServicesCloud from "./components/DataCenter/ServicesCloud";
import CoLocations from "./components/DataCenter/CoLocations";
import NetworkSurveillance from "./components/DataCenter/NetworkSurveillance";
import BigDataTechnologies from "./components/Technology/BigDataTechnologies";
import MicrosoftPowerbi from "./components/Technology/MicrosoftPowerbi";
import ErpOdooSaas from "./components/Technology/ErpOdooSaas";
import EurosomDataPlatform from "./components/Technology/EurosomDataPlatform";
import ChatgptApi from "./components/Technology/ChatgptApi";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* services routes */}
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path='/Services/' element={<Services/>}/>

        <Route path="/services/cloud-services" element={<CloudServices />} />

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

        {/* solutions routes */}
        <Route path="/Solutions" element={<Solutions />} />
        <Route
          path="/solutions/cloud-infrastructure"
          element={<CloudInfrastructure />}
        />

        <Route
          path="/solutions/digital-workplace"
          element={<DigitalWorkplace />}
        />

        <Route
          path="/solutions/technology-services"
          element={<TechnologyServices />}
        />

        {/* solutions routes end */}

        {/* Data Center routes */}
        <Route path="/datacenter/cloud-services" element={<ServicesCloud />} />

        <Route path="/datacenter/co-locations" element={<CoLocations />} />
        <Route
          path="/datacenter/network-surveillance"
          element={<NetworkSurveillance />}
        />

        {/* Data Center routes end */}

        {/* Data Center routes */}
        <Route path="/technology/big-data-technologies" element={<BigDataTechnologies />} />
        <Route path="/technology/microsoft-powerbi" element={<MicrosoftPowerbi />} />
        <Route path="/technology/erp-odoo-saas" element={<ErpOdooSaas />} />
        <Route path="/technology/eurosom-data-platform" element={<EurosomDataPlatform />} />
        <Route path="/technology/chatgpt-api" element={<ChatgptApi />} />


        

        

        {/* Data Center routes end */}

        <Route path="/solutions" element={<Solutions />} />
        <Route path="/app-developer" element={<AppDeveloper />} />

        <Route path="/cloud-services" element={<CloudServices />} />
        <Route path="/cloud-storage" element={<CloudStorage />} />
        <Route path="/ai-chatgpt" element={<AIChatGpt />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/data-analytics" element={<DataAnalytics />} />

        <Route path="technology/flutter-programming" element={<Flutter />} />

        {/* about us route start */}
        <Route path="/about" element={<About />} />
        {/* about us route end */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
// src/App.js
// import { RouterProvider } from "react-router-dom";
// import { routes } from "./routes/routes";

// function App() {
//   return <RouterProvider router={routes} />;
// }

// export default App;
