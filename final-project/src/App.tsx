import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import CreateAccount from './components/createaccount';
import BarberSelection from './components/barberselection';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/barbers" element={<BarberSelection />} />
      </Routes>
    </Router>
  );
};

export default App;
