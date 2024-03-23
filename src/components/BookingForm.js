import React, { useState } from 'react';
import './BookingForm.css';
import TTdrop from './assets/TTSwapnatravels.png';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic for form submission here
    alert('Booking Successful!');
    // Reset form fields after successful submission
    setName('');
    setMobile('');
    setEmail('');
    setDescription('');
  };

  return (
    <div className="booking-page" id="booking-page">
      <h1>Book Now</h1>
      <div className="booking-container">
        <div className="image-container">
          <img src={TTdrop} alt="Booking" />
        </div>
        <div className="form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile No.</label>
              <input
                type="tel"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="book-now-btn">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;