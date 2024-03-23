import React from 'react';
import './TTravelsstyles.css';
import TTdrop from './assets/TTvan2img.png';

const TTravels = () => {
  return (
    <div className="small-screen-container">
      
        <img src={TTdrop} alt="Small Screen Image" />
      <div className="button-container">
        <button className="image-button">Book Now</button>
      </div>
    </div>
  );
};

export default TTravels;