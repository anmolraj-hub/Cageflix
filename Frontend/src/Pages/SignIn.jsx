import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';


export default function SignIn({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/signin', {
        username,
        password
      });
      if (response.status === 200) {
        onLogin(username); 
        navigate('/'); 
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      alert('Sign In failed');
    }
  };

  return (
    <div className="signin-page">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <input 
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
