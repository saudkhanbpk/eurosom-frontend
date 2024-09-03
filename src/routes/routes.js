// src/routes.js
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Services from "../pages/Services";
import Solutions from "../pages/Solutions";
import CloudServices from "../pages/CloudServices";
import AIChatGpt from "../pages/AIChatGpt";
import CloudStorage from "../pages/CloudStorage";
import DataAnalytics from "../pages/DataAnalytics";
import MobileAppDevelopement from "../components/Services/MobileAppDevelopement";
import AlMLIoTApps from "../components/Services/AlMLIoTApps";
import BigDataAnalytics from "../components/Services/Big-Data-Analytics";
import CyberSecurity from "../components/Services/Cyber-Security";
import EnterpriseInformationManagement from "../components/Services/EnterpriseInformationManagement";
import Slidebar from "../components/slidebar/Slidebar";
import Flutter from '../components/flutter/components/Flutter';
import ContactUs from '../components/contact-us/components/ContactUs';
import AppDeveloper from '../components/hire-developer/components/AppDeveloper';

// Layout with NavigationBar and Footer
import MainLayout from "../layouts/MainLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Main layout wrapping the routes
    children: [
      { path: "", element: <HomePage /> },
      { path: "services", element: <Services /> },
      { path: "services/mobile-app-development", element: <MobileAppDevelopement /> },
      { path: "services/ai-ml-iot-applications", element: <AlMLIoTApps /> },
      { path: "services/big-data-analytics", element: <BigDataAnalytics /> },
      { path: "services/cyber-security", element: <CyberSecurity /> },
      { path: "services/enterprise-information-management", element: <EnterpriseInformationManagement /> },
      { path: "solutions", element: <Solutions /> },
      { path: "cloud-services", element: <CloudServices /> },
      { path: "cloud-storage", element: <CloudStorage /> },
      { path: "ai-chatgpt", element: <AIChatGpt /> },
      { path: "data-analytics", element: <DataAnalytics /> },
      { path: "slidebar", element: <Slidebar /> },
      { path: "flutter-programming", element: <Flutter /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "app-developer", element: <AppDeveloper /> },
    ],
  },
]);
