import React from 'react';
import './TTravelsstyles.css';
import TTdrop from './assets/TTvan2img.png';

const TTravels = () => {
  return (
    <div className="small-screen-container">
      <h1 className='ttmob'>Tempo Traveller (TT) </h1>
        <img src={TTdrop} alt="Small Screen Image" />
      <div className="button-container">
        <a href='#booking-page' className="image-button">Book Now</a>
      </div>
    </div>
  );
};

export default TTravels;