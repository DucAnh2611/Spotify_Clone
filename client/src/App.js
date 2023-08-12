import './App.css';
import React, { useEffect } from 'react';
import AppRouter from './Assets/AppRoute/AppRouter';

function App() {

  useEffect(() => {
    document.title = "Spotify";
  }, []);

  return (
    <AppRouter/>
  );
}

export default App;
