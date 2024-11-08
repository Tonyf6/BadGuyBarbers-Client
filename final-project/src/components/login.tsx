import logo from '../assets/Bad Guy Barbers Logo.png'

const Login = () => {
  return (
    <div className="login-container">
      {/* Logo section */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Login box */}
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form className="flex flex-col gap-4">
          {/* Username input */}
          <label className="input-label" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="input-field"
            placeholder="Username"
          />
          {/* Password input */}
          <label className="input-label" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="input-field"
            placeholder="Password"
          />
          {/* Login button */}
          <button
            type="submit"
            className="button button-login"
          >
            Login
          </button>
          {/* Create Account button */}
          <button
            type="button"
            className="button button-create-account"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
