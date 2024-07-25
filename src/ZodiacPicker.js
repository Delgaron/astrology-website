import React, { useState } from 'react';

const zodiacSigns = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

const ZodiacPicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? zodiacSigns.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === zodiacSigns.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Choose Your Zodiac Sign</h1>
      <div>
        <button onClick={handlePrevious}>Left</button>
        <span style={{ margin: '0 20px', fontSize: '20px' }}>{zodiacSigns[currentIndex]}</span>
        <button onClick={handleNext}>Right</button>
      </div>
    </div>
  );
};

export default ZodiacPicker;