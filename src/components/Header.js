import React from 'react';

import heroImage from '../images/hero-image-cropped.jpg';

export const Header = () => {
  return (
    <div className='container'>
      <nav className='navbar'>
        <h1>Sofia Wallerberg</h1>
        <div className='navbar-links'>
          <a href='/'>home</a>
          <a href='/projects'>projects</a>
          <a href='/resume'>resume</a>
        </div>
      </nav>
      <div className='header-image-container'>
        <img src={heroImage} alt='hero image with blue lights' />
      </div>
    </div>
  );
};
