import React, { useState } from 'react';
import './ZodiacPicker.css';

const zodiacSigns = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

const ZodiacPicker = () => {
  const [currentSignIndex, setCurrentSignIndex] = useState(0);

  const handleNext = () => {
    setCurrentSignIndex((prevIndex) => (prevIndex + 1) % zodiacSigns.length);
  };

  const handlePrevious = () => {
    setCurrentSignIndex((prevIndex) => (prevIndex - 1 + zodiacSigns.length) % zodiacSigns.length);
  };

  return (
    <div className="zodiac-picker">
      <div className="zodiac-sign">
        <h1>{zodiacSigns[currentSignIndex]}</h1>
        <img
          src={`${process.env.PUBLIC_URL}/zodiac-images/${zodiacSigns[currentSignIndex].toLowerCase()}.png`}
          alt={zodiacSigns[currentSignIndex]}
        />
      </div>
      <div className="zodiac-buttons">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default ZodiacPicker;