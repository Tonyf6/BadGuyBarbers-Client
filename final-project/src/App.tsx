import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import CreateAccount from './components/createaccount';
import BarberSelection from './components/barberselection';
import BarberServices from './components/barberservices';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/barberselection" element={<BarberSelection />} />
        <Route path="/barberservices" element={< BarberServices/>} />

      </Routes>
    </Router>
  );
};

export default App;
