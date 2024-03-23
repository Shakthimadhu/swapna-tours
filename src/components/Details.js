import React from 'react';
import './DetailsStyles.css';
import Review from './assets/rEVIEWS6.png'
import TrustedCust from './assets/customers.png'
import Destination from './assets/Destinations.png'

const Details = () => {
  return (
    <div className="trusted-customers">
      <div className="trusted-customers-container">
        <div className="trusted-customers-card">
          <div className="trusted-customers-image">
            <img src={Review} alt="Customer Logo" />
          </div>
          <div className="trusted-customers-text">
            <h3>Overall Reviews</h3>
          </div>
        </div>

        <div className="trusted-customers-card">
          <div className="trusted-customers-image">
            <img src={TrustedCust} alt="Customer Logo" />
          </div>
          <div className="trusted-customers-text">
            <h3>Trusted Customers</h3>
            
          </div>
        </div>

        <div className="trusted-customers-card">
          <div className="trusted-customers-image">
            <img src={Destination} alt="Customer Logo" />
          </div>
          <div className="trusted-customers-text">
            <h3>Destinations</h3>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;