import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function FloatingInfo1() {
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
    const floatingInfo = document.getElementById('floatingInfo1');
    const floatingInfoTop = floatingInfo.offsetTop;
    const windowHeight = window.innerHeight;

    if (scrollPosition > floatingInfoTop - windowHeight / 2 && scrollPosition < floatingInfoTop + windowHeight / 2) {
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
    color: isHovered ? 'black' : 'white', // Change color on hover
    transition: 'color 0.3s ease-in-out',
  };

  return (
    <Link to="Enterococcus Page">
     
      <div
        id="floatingInfo1"
        style={{
          position: 'absolute',
          left: position,
          top: '900px',
          zIndex: '1',
          width: '350px',
          height: '350px',
          padding: '20px',
          backgroundColor: 'rgba(240, 240, 240, 0.8)',
          transition: 'left 0.5s ease-in-out',
          textAlign: 'center',
          color: 'black',
          borderRadius: '50px',
          overflow: 'hidden'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
         <p> 
        
      </p>
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              top: '-30px',
              left: '-15px',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: isHovered ? '#BFD4D5' : '#8c0303', // Change color on hover
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
              backgroundColor: isHovered ? '#BFD4D5' : '#8c0303', // Change color on hover
              zIndex: '-1',
              borderRadius: '10px'
            }}
          ></div>
          <div>
          
              <h5 style={headingStyle}>Enterococcus faecium.</h5>
          </div>
          <img
            src='/e facum.jpg' 
            alt="Enterococcus Image"
            style={{ width: '90px', height: '90px', position: 'absolute', top: '-15px', left: '-2px', zIndex: '1' }}
          />
          <div style={{ position: 'absolute', textAlign: 'justify', top: '90px', zIndex: '1' }}>
            Enterococcus faecium is a Gram-positive, spherical bacterium associated with nosocomial
            infections such as bacteremia, endocarditis, and urinary tract and surgical wound infections.
            Notably, in February 2017, the World Health Organization (WHO) designated
            vancomycin-resistant E. faecium as a high-priority pathogen due to a significant increase in its
            prevalence.
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FloatingInfo1;
