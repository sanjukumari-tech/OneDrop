import React from 'react';
import "../styles/login.css";
import EmailAuth from './EmailAuth';

const Login = ({ onLogin }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Assume login is successful
    onLogin(); // Call the onLogin prop to update the login state
  };

  return (
    <div className='login'>
      <div className='login-header'>
        <img src="src/assets/Logo12.png" alt="Logo" height="24px" width="156.77px" />
      </div>
      <div className='login-main'>
        <form onSubmit={handleSubmit}>
          <EmailAuth />
          <button type="submit">Login</button>
        </form>
      </div>
      <div className='login-footer'>
        <p>© 2023 Reachinbox. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Login;
