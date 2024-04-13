import React, { useState } from 'react';
import './FAQSectionstyles.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: ' 1) How can I book a tour with Swapna Tours?',
      answer: 'Booking a tour with Swapna Tours is quick and easy. You can browse our website to explore our range of packages and destinations. Once you have found the perfect tour simply fill out our online booking form or contact our friendly customer service team for assistance. We ll guide you through the booking process and ensure that all your travel arrangements are taken care of smoothly. ',
    },
    {
      question: '2) What safety measures do you have in place for travelers?',
      answer: 'At Swapna Tours, the safety and well-being of our travelers are our top priorities. We adhere to stringent safety standards and guidelines to ensure a secure and worry-free travel experience. From regularly inspected vehicles and licensed drivers to emergency assistance and travel insurance options, we take every precaution to safeguard our clients throughout their journey. Additionally, we stay updated on travel advisories and health protocols to address any unforeseen circumstances or emergencies that may arise.',
    },
    {
      question: '3) Are vehicles maintained clean by Swapna Tours?',
      answer: 'Yes, at Swapna Tours, we prioritize cleanliness and maintenance to ensure that our clients enjoy a comfortable and hygienic travel experience. Our vehicles are meticulously maintained and regularly serviced to meet the highest standards of cleanliness and safety. From spacious coaches and comfortable sedans to versatile SUVs and well-equipped Tempo Travellers, each vehicle in our fleet undergoes thorough cleaning and sanitization after every journey.',
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <br></br>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h3>{faq.question}</h3>
              <span className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`}>&#x25BC;</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;