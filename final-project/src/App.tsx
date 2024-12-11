
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Login from './components/login';
import CreateAccount from './components/createaccount';
import BarberSelection from './components/barberselection';
import BarberServices from './components/barberservices';
import Throwaway from './components/Throwaway';
import { Navbar } from 'flowbite-react';
import './App.css';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import ChooseServicePage from './components/ChooseTimePage';
import ChooseTimePage from './components/ChooseTimePage';


const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (

    <AnimatePresence mode="wait">
      <div>
      <NavBar/>
      </div>
      <Routes location={location} key={location.pathname}>
      <Route path="/home" element={<LandingPage />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/time" element={<ChooseServicePage />} /> 
      {/* <ChooseTimePage/> */}

        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/barberselection" element={<BarberSelection />} />
        <Route path="/barberservices" element={<BarberServices/>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
