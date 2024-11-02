import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    navigate('/home');
  };

  return (
    <div className="main">
      <div className="Columnone">
        <div className="box">
          <h2>Welcome Back!</h2>
          <p>Log in with your email id or phone number to enter.</p>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' }}>
              <input type="checkbox" id="keep-me-logged-in" />
              <label htmlFor="keep-me-logged-in"> Keep me logged in</label>
              <a href="#" style={{ marginLeft: 'auto' }}>Forgot your password?</a>
            </div>
            <button type="submit">Login</button>
            <p>Need an account? <a href="/signup">Register</a></p>
          </form>
        </div>
      </div>
      <div
        className="Columntwo"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/img/bg.jpg'})`,
          backgroundSize: 'cover',
        }}
      >
        <h3>Welcome to Orgface</h3>
        <p>Enjoy the new experience of chatting in the organization</p>
        <div className="firstrow">
          <img src="/assets/img/Profile1.jpg" alt="Profile Picture" className="profile-pic" />
          <img src="/assets/img/woman1.png" alt="Profile pic" className="profile-pic" />
        </div>
        <div className="secondrow">
          <img src="/assets/img/woman2.png" alt="Profile3" className="profile-pic" />
          <img src="/assets/img/man2.png" alt="Profile4" className="profile-pic" />
        </div>
      </div>
    </div>
  );
};

export default Login;
