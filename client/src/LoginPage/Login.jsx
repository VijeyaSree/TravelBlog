import React from 'react';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
  };

  const handleGoogleLoginFailure = () => {
    console.log('Login Failed');
  };

  return (
    <div className='Full'>
      <div className='wrapper'>
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required />
            <FaLock className='icon' />
          </div>

          <div className="remember-forget">
            <label><input type="checkbox" /> Remember me</label>
            <a href="/forget">Forgot password?</a>
          </div>

          <button type="submit">Login</button>

          <div className="social-login">
            <p>Or login with:</p>
            <div className="google-button">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginFailure}
              />
            </div>
          </div>

          <div className="register-link">
            <p>Don't have an account? <a href="/register">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
