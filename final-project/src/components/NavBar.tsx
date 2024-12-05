import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Photos/Bad Guy Barbers Logo.png';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/home');
  };

  const handleLogout = () => {
    // Add any logout logic here
    navigate('/');
  };

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-start p-4">
      <div 
        onClick={handleLogoClick}
        className="cursor-pointer"
      >
        <img
          src={Logo}
          alt="Bad Guy Barbers Logo"
          className="h-32"
        />
      </div>

      <button
        onClick={handleLogout}
        className="font-jacques bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-full transition-colors duration-200"
      >
        Logout
      </button>
    </nav>
  );
};

export default NavBar;