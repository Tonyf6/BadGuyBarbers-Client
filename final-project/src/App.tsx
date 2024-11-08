import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import CreateAccount from './components/createaccount';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
};

export default App;
