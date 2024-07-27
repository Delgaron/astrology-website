import React from 'react';
import './App.css';
import StarryNight from './StarryNight';
import ZodiacPicker from './ZodiacPicker';


const App = () => {
  return (
    <div className="app">
      <StarryNight />
      <div className="content" style={{ textAlign: 'center', color: 'white'}}>
        <h1>Get you daily fortune</h1>
        <p>visit our other media</p>
        <ZodiacPicker />
        <div style={{ height: '200vh' }}></div>
      </div>
    </div>
  );
};

export default App;
