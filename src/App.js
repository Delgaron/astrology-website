import React from 'react';
import './App.css';
import StarryNight from './StarryNight';
import ZodiacPicker from './ZodiacPicker';


const App = () => {
  return (
    <div className="app">
      <StarryNight />
      <div className="content" style={{ textAlign: 'center', color: 'white'}}>
        <header className="header">
          <img src="MAIN_TAB.png" alt="Logo" className="centered-image" />
        </header>
        <ZodiacPicker />
        <div style={{ height: '200vh' }}></div>
      </div>
    </div>
  );
};

export default App;
