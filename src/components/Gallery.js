import React, { useState, useEffect } from 'react';
import './Gallerystyles.css';
import Galleryimg1 from './assets/Gallery8.jpg'
import Galleryimg2 from './assets/img1.jpg'
import Galleryimg3 from './assets/img2.jpg'
import Galleryimg4 from './assets/img4.jpg'
import Galleryimg5 from './assets/img5.jpg'
import Galleryimg6 from './assets/img6.jpg'
import Galleryimg7 from './assets/img7.jpg'
import Galleryimg8 from './assets/img8.jpg'
import Galleryimg9 from './assets/img9.jpg'
import Galleryimg10 from './assets/img10.jpg'
import Galleryimg11 from './assets/img11.jpg'

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
    Galleryimg9,
    Galleryimg10,
    Galleryimg11,
   
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className='gallery-page' id='gallery-page'> 
    <h1 className='testemonials-h1'>GALLERY</h1>
    <br></br>
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