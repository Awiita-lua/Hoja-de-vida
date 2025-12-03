// src/components/Carousel.jsx
import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="project-carousel">
      <div className="carousel-track">
        {images.map((img, index) => (
          <img
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            src={img.src}
            alt={img.alt}
          />
        ))}
      </div>
      <button className="carousel-btn prev-btn" onClick={goToPrevious}>‹</button>
      <button className="carousel-btn next-btn" onClick={goToNext}>›</button>
    </div>
  );
};

export default Carousel;