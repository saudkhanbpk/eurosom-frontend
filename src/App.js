import {BrowserRouter , Routes, Route} from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import './App.css';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import CloudServices from './pages/CloudServices';
import AIChatGpt from './pages/AIChatGpt';
import CloudStorage from './pages/CloudStorage';
import DataAnalytics from './pages/DataAnalytics';
import Slidebar from './components/Slidebar';

function App() {
  return (
    <BrowserRouter>
        <NavigationBar/>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/solutions" element={<Solutions/>}/>
        <Route path="/cloud-services" element={<CloudServices/>}/>
        <Route path="/cloud-storage" element={<CloudStorage/>}/>
        <Route path="/ai-chatgpt" element={<AIChatGpt/>}/>
        <Route path="/data-analytics" element={<DataAnalytics/>}/>
        <Route path="/slidebar" element={<Slidebar/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

  );
}

export default App;
