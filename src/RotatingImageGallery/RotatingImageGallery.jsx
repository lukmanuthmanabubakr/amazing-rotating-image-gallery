import React, { useState, useEffect } from 'react';
import './RotatingImageGallery.css';

function RotatingImageGallery() {
  const [x, setX] = useState(0);

  const updateGallery = () => {
    setX((prevX) => prevX - 45);
  };

  useEffect(() => {
    const timer = setTimeout(updateGallery, 3000);
    return () => clearTimeout(timer);
  }, [x]);

  return (
    <div>
      <div className="image-container" style={{ transform: `perspective(1000px) rotateY(${x}deg)` }}>
        <span style={{ '--i': 1 }}>
          <img src="https://picsum.photos/id/237/300/200" alt="Gallery Image" />
        </span>
        <span style={{ '--i': 2 }}>
          <img src="https://picsum.photos/id/23/300/200" alt="Gallery Image" />
        </span>
        <span style={{ '--i': 3 }}>
          <img src="https://picsum.photos/id/48/300/200" alt="Gallery Image" />
        </span>
        <span style={{ '--i': 4 }}>
          <img src="https://picsum.photos/id/12/300/200" alt="Gallery Image" />
        </span>
        <span style={{ '--i': 5 }}>
          <img src="https://picsum.photos/id/59/300/200" alt="Gallery Image" />
        </span>
        <span style={{ '--i': 6 }}>
          <img src="https://picsum.photos/id/160/300/200" alt="Gallery Image" />
        </span>
        <span style={{ '--i': 7 }}>
          <img src="https://picsum.photos/id/370/300/200" alt="Gallery Image" />
        </span>
        <span style={{ '--i': 8 }}>
          <img src="https://picsum.photos/id/478/300/200" alt="Gallery Image" />
        </span>
      </div>
      <div className="btn-container">
        <button className="btn" onClick={() => setX((prevX) => prevX + 45)}>Prev</button>
        <button className="btn" onClick={() => setX((prevX) => prevX - 45)}>Next</button>
      </div>
    </div>
  );
}

export default RotatingImageGallery;
