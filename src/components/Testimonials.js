import React from 'react';
import './TestimonialsStyles.css';
import Customerphoto from './assets/Nagaprabu.png';
import Customerphoto2 from './assets/Customer2.png';
import Customerphoto3 from './assets/Customer3.png';
import Customerphoto4 from './assets/Customer4.png';
import Customerphoto5 from './assets/Customer5.png';

const Testimonial = () => {
  return (
    <div>
      <h1 className='testemonials-h1'>OUR CUSTOMER REVIEWS</h1>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <div className="testimonial-image">
            <img src={Customerphoto5} alt="Testimonial" />
          </div>
          <div className="testimonial-content">
            <div className="testimonial-stars">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
            </div>
            <h3 className="testimonial-author">Jyotirmoyee Dutta</h3>
            <p className="testimonial-text">
              "We had a really good experience with swapna tours. The drivers were really sweet and helpful.  Especially Manju driver. He was really helpful."
            </p>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-image">
            <img src={Customerphoto2} alt="Testimonial" />
          </div>
          <div className="testimonial-content">
            <div className="testimonial-stars">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
            </div>
            <h3 className="testimonial-author">Divya Swaroop</h3>
            <p className="testimonial-text">
              "Sharath is a very good driver, very friendly, accommodating and has good control over his driving. Our three days trip to Yercaud in the tempo traveller was very comfortable, safe and was in good hands of a professional driver."
            </p>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-image">
            <img src={Customerphoto3} alt="Testimonial" />
          </div>
          <div className="testimonial-content">
            <div className="testimonial-stars">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
            </div>
            <h3 className="testimonial-author">Sushma Reddy</h3>
            <p className="testimonial-text">
              "A big thanks to Swapna tours. you made our trip memorable.looking forward to travel as much as possible with you ppl.i must say you guys are amazing we enjoyed a lot through out the trip."
            </p>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-image">
            <img src={Customerphoto} alt="Testimonial" />
          </div>
          <div className="testimonial-content">
            <div className="testimonial-stars">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
            </div>
            <h3 className="testimonial-author">Naga Prabhu N</h3>
            <p className="testimonial-text">
              "Highly recommend them. I have had 3 trips including a family tour. Rightly priced. Helps us to reach places on time. No complaints whatsoever. Very accommodating driver.."
            </p>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-image">
            <img src={Customerphoto4} alt="Testimonial" />
          </div>
          <div className="testimonial-content">
            <div className="testimonial-stars">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
            </div>
            <h3 className="testimonial-author">Jaganath Moorthy</h3>
            <p className="testimonial-text">
              "We have used their services multiple times and recommend it. Vehicles are very good quality and drivers are extremely reliable and polite. The owner is very receptive and responds to any feedback promptly"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
