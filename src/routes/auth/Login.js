// src/routes/auth/Login.js
import React from 'react';
import './auth.css';

const Login = ({ username, password, setUsername, setPassword }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Logging in with:', { username, password });
    // Example: send login request to backend
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
