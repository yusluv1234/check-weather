import React from 'react';
import { FetchWeather } from './api/FetchWether';
import './App.css';


const App = () => {
  return (
    <div className="main-container">
      <FetchWeather />
    </div>
  )
}

export default App;
