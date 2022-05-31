import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export const Projects = () => {
  const handleDragStart = e => e.preventDefault();

  const items = [
    <img
      src='https://loremflickr.com/640/360
'
      onDragStart={handleDragStart}
      role='presentation'
    />,
    <img
      src='https://loremflickr.com/640/360
'
      onDragStart={handleDragStart}
      role='presentation'
    />,
    <img
      src='https://loremflickr.com/640/360
'
      onDragStart={handleDragStart}
      role='presentation'
    />,
  ];
  return (
    <div>
      <h1>projects</h1>
      <div className='carousel-container'>
        <AliceCarousel
          mouseTracking
          animationType='fadeout'
          items={items}
          infinite
          autoPlayInterval='4000'
          autoPlay
        />
      </div>
    </div>
  );
};
