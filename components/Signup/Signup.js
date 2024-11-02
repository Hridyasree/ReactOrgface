import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  
    const [email, setEmail] = useState('');
    const [displayname, setDisplayname] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = (event) => {
      event.preventDefault();
  
      console.log("Email:", email);
      console.log("Displayname:",displayname);
      console.log("Password:", password);
     
      navigate('/home');
    };
  
  return (
    <div className="main">
      <div className="Columnone">
        <div className="box">
          <h2>Create your Account!</h2>
          <p>Register your email address</p>
          <form onSubmit={handleLogin}>
            <input 
            type="text" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <input 
            type="text" 
            placeholder="Display name" 
            value={displayname}
            onChange={(e) => setDisplayname(e.target.value)}
            required />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p>Password must be 8 or more characters</p>
            <p> By registering, you agree to Orgface 
              <a href="#"> Privacy Policy</a> and 
              <a href="#"> Terms of service</a>
            </p>
            <button type="submit">Create an account</button>
            <p>Already have an account? <a href="/login">Login</a></p>
            <p className="or">--------------- or ----------------</p>
            <button className="submit">Register with phone number</button>
          </form>
        </div>
      </div>
      <div className="Columntwo">
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

export default Signup;
