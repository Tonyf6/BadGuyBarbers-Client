import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedPage from './AnimatedPage';
import { LoginFormSkeleton } from './Skeleton';
import logo from '../assets/Bad Guy Barbers Logo.png';

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleCreateAccount = () => {
    navigate('/createaccount');
  };

  const logoAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  if (isLoading) {
    return (
      <AnimatedPage>
        <div className="login-container">
          <motion.div className="logo-container" {...logoAnimation}>
            <img src={logo} alt="Bad Guy Barbers" className="logo" />
          </motion.div>
          <LoginFormSkeleton />
        </div>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
      <div className="login-container">
        <motion.div className="logo-container" {...logoAnimation}>
          <img src={logo} alt="Bad Guy Barbers" className="logo" />
        </motion.div>

        <motion.div
          className="login-box"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="login-title">Login</h2>
          <form className="flex flex-col gap-6">
            <motion.div 
              className="flex flex-col gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <label className="input-label">Username</label>
              <input
                type="text"
                className="input-field"
                placeholder="Enter username"
              />
            </motion.div>

            <motion.div 
              className="flex flex-col gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <label className="input-label">Password</label>
              <input
                type="password"
                className="input-field"
                placeholder="Enter password"
              />
            </motion.div>

            <motion.div 
              className="flex flex-col gap-3 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <button type="submit" className="button button-login">
                Login
              </button>
              <button 
                type="button" 
                className="button button-create-account"
                onClick={handleCreateAccount}
              >
                Create Account
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Login;