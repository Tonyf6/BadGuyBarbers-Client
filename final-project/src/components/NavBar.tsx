import Logo from '../assets/Photos/Bad Guy Barbers Logo.png';
const NavBar = () => {
  return (
    <>
      <div className="absolute top-0 left-0">
        <img
          src={Logo}
          alt="Bad Guy Barbers Logo"
          className="h-32 "
        />
      </div>
    </>
  );
};
export default NavBar;