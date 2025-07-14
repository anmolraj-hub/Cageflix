import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import '../components/SignIn.css';

/**
 - SignIn component
 - Handles user authentication form.
 - Calls onLogin prop if credentials are valid and navigates to home.
 */

export default function SignIn({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handles form submission for signing in
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/signin', {
        username,
        password,
      });
      if (response.status === 200) {
        onLogin(username);
        navigate('/');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      alert('Incorrect Username or Password');
    }
  };

  return (
    <div className="signin-container">
      <h2 className="signin-title">Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <input
          type="text"
          placeholder="Email or phone number"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="signin-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="signin-input"
        />
        <button type="submit" className="signin-form-button">
          Sign In
        </button>
        <div className="signin-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className="help-link">Need help?</a>
        </div>
      </form>
    </div>
  );
}
