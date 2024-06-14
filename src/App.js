// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './routes/Dashboard';
import Authentication from './routes/auth/Authentication';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      axios.post('/api/auth/', {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        setIsLoggedIn(true);
        setUserUsername(response.data.username); // Supposons que l'API renvoie un objet avec un champ `username`
      })
      .catch(error => {
        console.error('Error during authentication:', error);
        setIsLoggedIn(false);
        setUserUsername('');
      });
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard username={userUsername} />
      ) : (
        <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
      )}
    </div>
  );
}

export default App;
