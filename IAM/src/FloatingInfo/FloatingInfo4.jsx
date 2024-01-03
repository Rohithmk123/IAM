import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function FloatingInfo4() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [position, setPosition] = useState('200px'); // Initial position
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const floatingInfo = document.getElementById('floatingInfo1'); // Note: Using the same ID as in the previous components, adjust if needed
    const floatingInfoTop = floatingInfo.offsetTop;
    const windowHeight = window.innerHeight;

    if (scrollPosition > floatingInfoTop + 400 - windowHeight / 2 && scrollPosition < floatingInfoTop + 400 + windowHeight / 2) {
      // If the scroll position is within the range, move to the center
      setPosition(`calc(35% - ${floatingInfo.offsetWidth / 2}px)`);
    } else {
      // If the scroll position is outside the range, go back to the original position
      setPosition('200px');
    }
  }, [scrollPosition]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const headingStyle = {
    position: 'absolute',
    top: '10px',
    left: '105px',
    zIndex: '1',
    color: isHovered ? 'white' : 'black', // Change color on hover
    transition: 'color 0.3s ease-in-out',
  };

  return (
    <Link to="Acinetobacter_baumannii">
      <div
        id="floatingInfo1"
        style={{
          position: 'absolute',
          right: position,
          top: '1300px',
          zIndex: '1',
          width: '350px',
          height: '350px',
          padding: '20px',
          backgroundColor: 'rgba(240, 240, 240, 0.8)',
          transition: 'right 0.5s ease-in-out',
          borderRadius: '50px',
          overflow: 'hidden'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Add your additional information content here */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              top: '-30px',
              left: '-15px',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: isHovered ? 'purple' : '#8c0303', // Change color on hover
              zIndex: '-1'
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '320px',
              height: '50px',
              backgroundColor: isHovered ? 'purple' : '#8c0303', // Change color on hover
              zIndex: '-1',
              borderRadius: '10px'
            }}
          ></div>
          <div>
            <p style={{ cursor: 'pointer', textDecoration: '', textAlign: 'center' }}>
              <h5 style={headingStyle}>Acinetobacter baumannii</h5>
            </p>
          </div>
          <img
            src='/e facum.jpg' // Replace with the actual path to your image
            alt="Acinetobacter baumannii Image"
            style={{ width: '90px', height: '90px', position: 'absolute',
            top: '-15px', left: '-2px', zIndex: '1' }}
          />
        </div>
      </div>
    </Link>
  );
}

export default FloatingInfo4;
