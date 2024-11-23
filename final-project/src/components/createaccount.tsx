import React from 'react';
import logo from '../assets/Bad Guy Barbers Logo.png';

const CreateAccount = () => {
  return (
    <div className="login-container">
      {/* Logo section */}
      <div className="logo-container">
        <img src={logo} alt="Bad Guy Barbers" className="logo" />
      </div>

      {/* Create Account box */}
      <div className="login-box">
        <h2 className="login-title">Create Account</h2>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="input-label">Username</label>
            <input
              type="text"
              className="input-field"
              placeholder="Enter username"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="input-label">Password</label>
            <input
              type="password"
              className="input-field"
              placeholder="Enter password"
            />
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <button type="submit" className="button button-login">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;