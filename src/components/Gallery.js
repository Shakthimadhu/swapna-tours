import React, { useState, useEffect } from 'react';
import './Gallerystyles.css';
import Galleryimg1 from './assets/Gallery8.jpg'
import Galleryimg2 from './assets/Gallery1.jpg'
import Galleryimg3 from './assets/Gallery4.jpg'
import Galleryimg4 from './assets/Gallery5.jpg'
import Galleryimg5 from './assets/Gallery6.jpg'
import Galleryimg6 from './assets/Gallery7.jpg'
import Galleryimg7 from './assets/Galler2.jpg'
import Galleryimg8 from './assets/Galler3.jpg'

const Gallery = () => {
  const [images, setImages] = useState([
    Galleryimg6,
    Galleryimg7,
    Galleryimg8,
    Galleryimg1,
    Galleryimg2,
    Galleryimg3,
    Galleryimg4,
    Galleryimg5,
   
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div>
    <h1 className='testemonials-h1'>GALLERY</h1>
    <div className="gallery">
      <div className="gallery-container">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            style={{
              order:
                index === currentIndex
                  ? 0
                  : index < currentIndex
                  ? index - currentIndex + images.length
                  : index - currentIndex,
            }}
          >
            <img src={image} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Gallery;