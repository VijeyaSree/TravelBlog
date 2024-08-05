import React, { useState } from 'react';
import './Forget.css';
import { FaUser } from "react-icons/fa";

const Forget = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the submission logic
    console.log('Form submitted successfully');
    // Optionally redirect or show a success message
  };

  return (
    <div className='Full'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit} autoComplete="on">
          <h1>Forget Password</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaUser className='icon' />
          </div>

          

          <button type="submit">
            Reset
          </button>
          <div className="register-link">
            {/* Additional links or content can go here */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forget;
