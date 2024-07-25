import React, { useEffect } from 'react';
import './StarryNight.css';

const StarryNight = () => {
  useEffect(() => {
    const handleScroll = () => {
      const stars = document.querySelectorAll('.star');
      const scrollY = window.scrollY;

      stars.forEach((star, index) => {
        const speed = parseInt(star.dataset.speed);
        const y = (scrollY * speed) / 100;
        star.style.transform = `translateY(${y}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="starry-night">
      {Array.from({ length: 100 }).map((_, index) => (
        <div
          key={index}
          className="star"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
          }}
          data-speed={Math.random() * 10}
        ></div>
      ))}
    </div>
  );
};

export default StarryNight;